import React from 'react';
import {Footer} from '../Footer/Footer';
import './Game.scss';
import axios from 'axios';
import tableArray from '../App/App';
let teamsArray=[];
export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            goodAnswer:[],
            randomTeams:[],
        }
    }
    getSerieA =()=> {
        axios({
            url: 'http://api.football-data.org/v1/competitions/456/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));
    };
    getPremiership=()=>{
        axios({
            url: 'http://api.football-data.org/v1/competitions/445/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));

    };
    getPrimeraDivision=()=>{
        axios({
            url: 'http://api.football-data.org/v1/competitions/455/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));
    };
    getBundesliga=()=> {
        axios({
            url: 'http://api.football-data.org/v1/competitions/452/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));
    };
    getLigue1=()=> {
        axios({
            url: 'http://api.football-data.org/v1/competitions/450/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));
    };
    getEredevisie=()=> {
        axios({
            url: 'http://api.football-data.org/v1/competitions/449/teams ',
            headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
            json: true
        }).then((res) => this.setState({teams:this.state.teams.concat(res.data.teams)}));
    };
    componentWillMount() {
        this.getEredevisie();
        this.getLigue1();
        this.getBundesliga();
        this.getPrimeraDivision();
        this.getPremiership();
        this.getSerieA();
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
    //     teamsArray=teamsArray.push(this.state.teams);
    //     this.drawList();
    //     this.goodAnswer();
    //     // this.shuffle();
    //     // this.gameRender();
    // }

    render(){
        console.log(`${this.state.teams[99].crestUrl}`);
        // console.log(teamsArray[5]);
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
