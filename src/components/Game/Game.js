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
        }   
    }

    getSerieA = () => axios.get('http://api.football-data.org/v1/competitions/456/teams', { headers: AUTH_TOKEN });
    getPremiership = () => axios.get('http://api.football-data.org/v1/competitions/445/teams', { headers: AUTH_TOKEN });
    getPrimeraDivision = () => axios.get('http://api.football-data.org/v1/competitions/455/teams', { headers: AUTH_TOKEN });
    getBundesliga = () => axios.get('http://api.football-data.org/v1/competitions/452/teams', { headers: AUTH_TOKEN });
    getLigue1 = () => axios.get('http://api.football-data.org/v1/competitions/450/teams', { headers: AUTH_TOKEN });
    getEredevisie = () => axios.get('http://api.football-data.org/v1/competitions/449/teams', { headers: AUTH_TOKEN });
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
                        }));

    componentDidMount() {
        this.getTeams();
        // 10. wołamy getTeams() gdy mountowany jest komponent
    }

    // Pomysł na zrobienie funkcji losowania oddzielnie a w Draw list pętla for i od 0 do 3 z wykorzystaniem funkcji draw
    // draw =()=>{
    //     this.state.teams[Math.round(Math.random()*116)],

    // drawList =()=>{
    //    this.setState({
    //        randomTeams:this.randomTeams.concat([
    //            this.state.teams[Math.round(Math.random()*116)],
    //        this.state.teams[Math.round(Math.random()*116)],
    //        this.state.teams[Math.round(Math.random()*116)],
    //        this.state.teams[Math.round(Math.random()*116)]])
    //    })
    // //
    // };
    // //funkcja ustawiająca poprawną odpowiedź.
    // goodAnswer = ()=>{
    //     this.setState({
    //         goodAnswer:this.goodAnswer.concat(this.state.randomTeams[0])
    //     })
    // };
    // Funkcja mieszająca kolejność odpowiedzi dziękie czemu poprawna odpowiedź będzie na różnych pozycjach
    // shuffle = ()=> {
    //     this.setState({
    //         for(i = this.state.randomTeams.length; i=0;
    //     this.state.randomTeams.push(this.state.randomTeams.splice(~~(Math.random() * (i--)), 1))
    // )
    // })
    // };
    // gameRender = ()=>{
    //     return(
    //         <div>
    //             <div className={'img__square'} style={{'backgroundImage':this.state.goodAnswer.crestUrl}}>Jaki to klub</div>;
    //             <div className={'answers__square'}>
    //  tutaj wyrenderuję np. guziki po kliknięciu w które przechodzimy do następnego okna i dodamy punkt przy poprawnej odpowiedzi.
    //                 <ul>`${this.state.randomTeams.name[0]}`</ul>
    //                 <ul>${this.state.randomTeams.name[1]}</ul>
    //                 <ul>${this.state.randomTeams.name[2]}</ul>
    //                 <ul>${this.state.randomTeams.name[3]}</ul>
    //             </div>
    //
    //         </div>
    //     )
    // };
    //
    // componentDidMount(){
    //     //Mam problem z wstawieniem danych ściągniętych do zmiennej.
    //     this.state.teams=this.state.teams.push(this.state.teams);
    //     this.drawList();
    //     this.goodAnswer();
    //     // this.shuffle();
    //     // this.gameRender();
    // }

    render() {
        this.state.teams.length && console.log(this.state.teams);
        // 11. sprawdzamy czy this.state.teams nie jest pusty (początkowy stan), jeśli nie jest - to logujemy go do konsoli, lub robimy już konkretne operacje ;)

        return (
            <div className={'game__content'}>
                <div className={'img__square'} >
                </div>
                <div className={'answers__square'}>
                </div>
                <Footer/>
            </div>
        )
    }
}
