import React from 'react';
import {Footer} from '../Footer/Footer';
import './Result.scss';
import score from '../Game/Game';

export class Result extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='resultContent'>
                <div className='result'>
                    <h1> Congratulations Your Score: {score}</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
