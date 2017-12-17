import React from 'react';
import {Footer} from '../Footer/Footer';
import './Result.scss';
// import this.state.score from '../Game/Game';

export class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           score: [],
        }
    }
    render() {
        return (
            <div>
                <div className={'result'}>{this.state.score}</div>
                <Footer/>
            </div>
        )
    }
}
