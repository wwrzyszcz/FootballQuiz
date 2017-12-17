import axios from "axios";

import React from 'react';
import {Footer} from '../Footer/Footer';
let teamsArray =[];


export default class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            goodAnswer:[],
            randomTeams:[],
            counter:0,
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
    addOne() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    componentDidMount(){

    }

    render(){
        teamsArray=teamsArray.concat(this.state.teams);
        console.log(teamsArray)
        // console.log(teamsArray[5]);
        return (
            <div className={'data__content'}>
                <Footer/>
            </div>

        )
    }
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
//     teamsArray=teamsArray.push(this.state.teams);
//     this.drawList();
//     this.goodAnswer();
//     // this.shuffle();
//     // this.gameRender();
// }
// próba ściągania do zmiennej
// getSerieA =()=> {
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/456/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams))};
// getPremiership=()=>{
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/445/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams))};
// getPrimeraDivision=()=>{
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/455/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams))};
// getBundesliga=()=> {
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/452/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams))};
// getLigue1=()=> {
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/450/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams))};
// getEredevisie=()=> {
//     axios({
//         url: 'http://api.football-data.org/v1/competitions/449/teams ',
//         headers: {'X-Auth-Token': '92de6f5f95374fe4a539b170be10afc1'},
//         json: true
//     }).then((res) => teamsArray=teamsArray.concat(res.data.teams));
//     console.log(res.data.teams);
// };

// componentWillMount() {
//     this.getEredevisie();
//     this.getLigue1();
//     this.getBundesliga();
//     this.getPrimeraDivision();
//     this.getPremiership();
//     this.getSerieA();
// }

// componentWillMount(){
//     // this.inputTeams();
//     this.goodAnswer();
//     this.drawList();
//
// }
// clicked = (event)=>{
//     event.target.style.backgroundImage=this.state.teams[0].logo;
// }
// inputImg =()=>{
//     let img = document.createElement('div');
//     img.style.backgroundImage=this.state.goodAnswer.logo;
//     img.classList.add('img__square');
//   return img
// };
// teamsArray=teamsArray.concat(this.state.teams);
// let goodAnswer = teamsArray[Math.round(Math.random()*116)];
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

// Funkcja mieszająca kolejność odpowiedzi dziękie czemu poprawna odpowiedź będzie na różnych pozycjach

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
