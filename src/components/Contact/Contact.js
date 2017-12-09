import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import {Footer} from '../Footer/Footer';
import './Contact.scss';

export class Contact extends React.Component {
    constructor(porps) {
        super(porps)
        this.state = {
            authorData: " ",
        }
    }
changeState(){
this.setState({
    authorData: Author,
})
}
    render() {
        return (
            <div className={'contact__content'} onLoad={this.changeState}>
                <h1>Created by {this.state.name}</h1>
                <address>
                    <span>{this.state.account}</span>
                    <span>{this.state.mail}</span>
                </address>
                <Footer/>
            </div>
        )
    }
}

const Author = [
    {
        id: 1,
        name: 'WWrzyszcz',
        account: 'www.github.com/wwrzyszcz',
        mail: 'wrzyszcz.wojciech@gmail.com',
    }

]
