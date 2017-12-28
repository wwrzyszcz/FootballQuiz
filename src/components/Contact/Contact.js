import React from 'react';
import {Footer} from '../Footer/Footer';
import './Contact.scss';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorData: {},
        }
    }
changeState=()=>{
this.setState({
    authorData: author,
})
}
// mouseEnter = (e)=>{
//     e.target.classList.add("hoveredContact");
// };
// mouseLeave = (e)=>{
//     e.target.classList.remove("hoveredContact");
// };
componentDidMount(){
    this.changeState();
}
    render() {
        return (
            <div className={'contact__content'} >
                <address onMouseOver={this.mouseEnter} onMouseOut={this.mouseLeave}>
                    <h1>Created by {this.state.authorData.name}</h1>
                    <span><a href={this.state.authorData.account}>WWrzyszcz</a></span>
                    <span><a href={this.state.authorData.mail}>Contact me</a></span>
                </address>
                <Footer/>
            </div>
        )
    }
}
const author = {
        id: 1,
        name: 'WWrzyszcz',
        account:`http://www.github.com/wwrzyszcz`,
        mail: 'mailto:wrzyszcz.wojciech@gmail.com',
    }
