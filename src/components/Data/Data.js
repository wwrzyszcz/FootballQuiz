import axios from "axios";

import React from 'react';
import {Footer} from '../Footer/Footer';


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
                <Footer/>
            </div>

        )
    }
}
function getCompetitions() {
    axios.get('http://api.football-data.org/v1/competitions/?season=2017', {
        params: {
            id: "2017",
            apiKey: '92de6f5f95374fe4a539b170be10afc1',
        }).then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        })
    }
}
getCompetitions();


