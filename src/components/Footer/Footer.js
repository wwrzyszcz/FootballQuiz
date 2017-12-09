import React from 'react';
import {
    NavLink
} from 'react-router-dom';

import './Footer.scss';

export class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:" ",
        }
    }
    render(){
        return(
            <footer>
                <nav>
                        <NavLink className={'navi__item'} exact to='/'>Game </NavLink>
                        <NavLink className={'navi__item'} exact to='/HighScores'>HighScores </NavLink>
                        <NavLink className={'navi__item'} exact to='/Contact'>Contact </NavLink>
                </nav>
            </footer>
        )
    }
}