import React from 'react';
import {Footer} from '../Footer/Footer';
import './Result.scss';
import {Game} from '../Game/Game';

export class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           score: [],
        }

    }
    render() {
        return (
            <div className='resultContent'>
                <div className='result'>
                    <h1> Congratulations Your Score:</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}
