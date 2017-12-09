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
                    {/*<h1>Our current Champ: {pierwsza.pozycja z Tabeli}</h1>*/}
                    <table>
                        <thead>
                            <tr>Best form the Bests</tr>
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
        return(
        <tr>
            {/*<td>{namePrompt}</td>*/}
            {/*<td>{scorePrompt}</td>*/}
        </tr>
        )
    }
}

// AddRow = ()=>{
//
//         }
