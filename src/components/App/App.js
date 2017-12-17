import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Button from '../Button/Button';
import {Footer} from '../Footer/Footer';
import {Contact} from '../Contact/Contact';
import {HighScores} from '../HighScores/HighScores';
import {Game} from '../Game/Game';
import {Data} from '../Data/Data';
import {Result} from '../Result/Result';
export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            teams: [],
        }
    }

    render(){

     return(
        <div>
            <Switch>
                <Route exact path='/' component={Content}></Route>
                <Route  exact path='/Contact' component={Contact}></Route>
                <Route  exact path='/HighScores' component={HighScores}></Route>
                <Route  exact path='/Game' component={Game}></Route>
                <Route  exact path='/Result' component={Result}></Route>
            </Switch>
        </div>
     )
    }
}
class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return (
           <div className={'app__content'}>
               <Button/>
               <Footer/>
           </div>
       )
    }
}
