import React from 'react';
import {Footer} from '../Footer/Footer';
import './Game.scss';

export class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Value:" ",
        }
    }

    render(){
        return (
            <div className={'game__content'}>
               <div className={'img__square'}>
               </div>
                <div className={'answers__square'}>
                </div>
                <Footer/>
            </div>

        )
    }
}


