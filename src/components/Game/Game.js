
import React from 'react';
import {Footer} from '../Footer/Footer';
import './Game.scss';
import axios from 'axios';

const AUTH_TOKEN = {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'}; // 1. wyciągnąłem Auth token do constanta, nie mamy potrzeby go zmieniać

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            goodAnswer: [],
            randomTeams: [],
            counter:0,
            score:0,
            answers:[],
            image:'',
        }
    }

    getSerieA = () => axios.get('https://api.football-data.org/v1/competitions/456/teams', {headers: AUTH_TOKEN});
    getPremiership = () => axios.get('https://api.football-data.org/v1/competitions/445/teams', {headers: AUTH_TOKEN});
    getPrimeraDivision = () => axios.get('https://api.football-data.org/v1/competitions/455/teams', {headers: AUTH_TOKEN});
    getBundesliga = () => axios.get('https://api.football-data.org/v1/competitions/452/teams', {headers: AUTH_TOKEN});
    getLigue1 = () => axios.get('https://api.football-data.org/v1/competitions/450/teams', {headers: AUTH_TOKEN});
    getEredevisie = () => axios.get('https://api.football-data.org/v1/competitions/449/teams', {headers: AUTH_TOKEN});
    // 2. poszczególne gety straciły swoje .then() dlatego, że i tak nie chcemy procesować ich responsów oddzielnie

    getTeams = () => axios
        .all([this.getSerieA(), this.getPremiership(), this.getPrimeraDivision(), this.getBundesliga(), this.getLigue1(), this.getEredevisie()])
        // 3. powyższa linia chainuje wywołanie wszystkich getów i przejdzie do .then() dopiero gdy otrzymamy wszystkie responsy
        .then(axios.spread(function (serieA, premiership, primeraDivision, bundesliga, ligue1, eredevisie) {
            // 4. następnie spread przekazuje w parametrach responsy z poszczególnych getów, żebyśmy mogli ich użyć
            const args = Array.from(arguments);
            // 5. tworzymy tablicę z Array-like objectu `arguments`...
            return args.map(teamObj => teamObj.data.teams);
            // 6. ...po to, żebyśmy mogli się po niej przemapować i wyciągnąć z obiektów responsowych tylko to co chcemy - tablice z zespołami
        }))
        // 7. na tym etapie naszym `res` jest już tablica zawierająca 6 tablic z zespołami z poszczególnych getów
        .then(res => this.setState({
            teams: this.state.teams.concat(...res)
            // 8. przekazujemy ten `res` do setState i spread operatorem (feature z ES6) rozkładamy go jako argumenty do concata
            // 9. tym sposobem uzyskujemy nowy this.state.teams, który będzie wynikiem połączenia 6-ciu tablic z zespołami
        }, () => {
            let randomTeamsSet = new Set();
            while (randomTeamsSet.size <= 3) {
                randomTeamsSet.add(this.state.teams[Math.round(Math.random() * this.state.teams.length)]);
            }
            this.setState({
                randomTeams: [...randomTeamsSet]
            }, () => this.setState({
                goodAnswer: this.state.goodAnswer.concat(this.state.randomTeams[Math.round(Math.random() * this.state.randomTeams.length)])
            }, () =>  { if(this.state.goodAnswer) {
                this.setState({
                    image: this.state.image=this.state.goodAnswer[0].crestUrl
                });
                const random = Math.round(Math.random()*10);
                let img = document.getElementsByClassName('img__square');
                img[0].style.backgroundImage= `url('${this.state.image}')`;
                img[0].style.backgroundPosition="center";
                img[0].style.backgroundRepeat="no-repeat";
                let questionMark= document.getElementsByClassName('questionSquare');
                questionMark[0].classList.add('question');
                questionMark[0].style.left=`${(random*4.5)}`+`%`;
                questionMark[0].style.top=`${(random*3)}`+`%`;
                console.log('to jest good answer', this.state.goodAnswer, this.state.goodAnswer[0].crestUrl);
                console.log('to jest img state', this.state.image);
                console.log('to jest random teams', this.state.randomTeams[2].name);
                let buttonsAnswers = document.getElementsByTagName('button');
                buttonsAnswers[0].innerText = `${this.state.randomTeams[0].name}`;
                buttonsAnswers[1].innerText = `${this.state.randomTeams[1].name}`;
                buttonsAnswers[2].innerText = `${this.state.randomTeams[2].name}`;
                buttonsAnswers[3].innerText = `${this.state.randomTeams[3].name}`;
             }},
                // () => {
            //         if (this.state.randomTeams) {
            //             this.setState({
            //                 answers: this.state.answers.concat(this.state.randomTeams[0].name, this.state.randomTeams[1].name, this.state.randomTeams[2].name, this.state.randomTeams[3].name)
            //                 // answers: this.state.answers.concat(this.state.randomTeams.map(answer => answer.name))this.state.randomTeams[1]
            //             });
            //         // let buttonsAnswers = document.getElementsByTagName('button');
            //         // buttonsAnswers[0].innerHTML = `${this.state.answers[0]}`;
            //         // buttonsAnswers[1].innerHTML = `${this.state.answers[1]}`;
            //         // buttonsAnswers[2].innerHTML = `${this.state.answers[2]}`;
            //         // buttonsAnswers[3].innerHTML = `${this.state.answers[3]}`;
            //         // console.log(this.state.answers);
            //
            //     }}

            ));

        }));
    componentDidMount(){
        this.getTeams();

        // 10. wołamy getTeams() gdy mountowany jest komponent
    }
    buttonClick =(e)=> {
        if(this.state.counter <= 8){
           this.setState({
               counter:this.state.counter+1
           });
        if (e.target.textContent === this.state.goodAnswer[0].name){
            this.setState({
                score: this.state.score +1
            })
           }
           this.setState({
            goodAnswer:[]
            })
            let removeQuestion = document.getElementsByClassName('questionSquare');
            removeQuestion[0].classList.remove('question');
            this.getTeams();
        } else {
            let finalscore = this.state.score;
            this.props.history.push("/Result");
        }
    };

    render() {
        // this.state.teams.length && console.log(this.state.teams[9].crestUrl);
        // 11. sprawdzamy czy this.state.teams nie jest pusty (początkowy stan), jeśli nie jest - to logujemy go do konsoli, lub robimy już konkretne operacje ;)
        console.log('to jest counter', this.state.counter);
        console.log('to jest score', this.state.score);

        return (
            <div className='game__content'>
                {this.state.answers.length && console.log(this.state.answers[0], 'test')}
                <div className='img__square'>
                    <div className='questionSquare'></div>
                </div>
                <div className='answers__square'>
                    <button onClick={this.buttonClick}></button>
                    <button onClick={this.buttonClick}></button>
                    <button onClick={this.buttonClick}></button>
                    <button onClick={this.buttonClick}></button>
                </div>
                <Footer/>
            </div>
        )
    }
}