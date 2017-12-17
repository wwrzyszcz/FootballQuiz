
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
            counter:[],
            score:[],
            answers:[],
        }
    }

    getSerieA = () => axios.get('http://api.football-data.org/v1/competitions/456/teams', {headers: AUTH_TOKEN});
    getPremiership = () => axios.get('http://api.football-data.org/v1/competitions/445/teams', {headers: AUTH_TOKEN});
    getPrimeraDivision = () => axios.get('http://api.football-data.org/v1/competitions/455/teams', {headers: AUTH_TOKEN});
    getBundesliga = () => axios.get('http://api.football-data.org/v1/competitions/452/teams', {headers: AUTH_TOKEN});
    getLigue1 = () => axios.get('http://api.football-data.org/v1/competitions/450/teams', {headers: AUTH_TOKEN});
    getEredevisie = () => axios.get('http://api.football-data.org/v1/competitions/449/teams', {headers: AUTH_TOKEN});
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
                let img = document.getElementsByClassName('img__square');
                img[0].style.backgroundImage = this.state.goodAnswer.crestUrl;
                let questionMark= document.createElement("div");
                questionMark.classList.add('question');
                img[0].appendChild(questionMark);
                console.log(this.state.goodAnswer);
            }}, () => this.setState({
                answers: this.state.answers.concat(this.state.randomTeams.map(answer => answer.name))
            }, () => console.log(this.state.randomTeams))));
        }));
    componentDidMount(){
        this.getTeams();

        // 10. wołamy getTeams() gdy mountowany jest komponent
    }
    // buttonClick=()=> {
    //     if(this.state.counter < 9){
    //         this.setState({
    //             counter: this.state.counter++;
    //     }),
    //         //od nowa renderowanie obrazka i odopowiedzi.
    //     }
    // };
   //  od nowa renderowanie obrazka i odpowiedzi.
   //  };
   //  pętla 10 pytań plus po 10 pokaż div z counterem;
   //  shuffle=()=>{
   //      funkcja do mieszania kolejności tablicy przed wyświetleniem
   //  }





    render() {
        // this.state.teams.length && console.log(this.state.teams[9].crestUrl);
        console.log( 'to jest log', this.state.randomTeams);
        // 11. sprawdzamy czy this.state.teams nie jest pusty (początkowy stan), jeśli nie jest - to logujemy go do konsoli, lub robimy już konkretne operacje ;)

        return (
            <div className='game__content'>
                <div className='img__square' onClick={this.imageRender}>
                </div>
                <div className='answers__square'>
                    {/*<button onClick={this.buttonClick}>{this.state.randomTeams[0]}</button>*/}
                    {/*<button onClick={this.buttonClick}>{this.state.randomTeams[1]}</button>*/}
                    {/*<button onClick={this.buttonClick}>{this.state.randomTeams[2]}</button>*/}
                    {/*<button onClick={this.buttonClick}>{this.state.randomTeams[3]}</button>*/}
                </div>
                <Footer/>
            </div>
        )
    }
}
