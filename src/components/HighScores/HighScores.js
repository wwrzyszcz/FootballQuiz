import React from 'react';
import {Footer} from "../Footer/Footer";
import './Highscores.scss';

export class HighScores extends React.Component{
    // let namePrompt = prompt("Whats Your name Player");
    // let scorePrompt = prompt("Is Your score worth to add? Try!");
    constructor(props){
        super(props)
        this.state={
            value:"0"
        }
    }
    render(){
        return(
            <div className={"highScores__content"}>
                <p>Heare will be held best scores with names of their owners. Firebase will be used as a database</p>
                    {/*<h1>Our current Champ: {pierwsza.pozycja z Tabeli}</h1>*/}
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        <TableRow/>
                        </tbody>
                    </table>
                    <Footer/>
            </div>
        )
    }
}
class TableRow extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return null
    }
}

// AddRow = ()=>{
//
//         }
