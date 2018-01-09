import React from 'react';

import {withRouter} from "react-router-dom";

import './Button.scss';

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
        color: "blue",
        }
    }
    onClick =()=>{
        this.setState({
            color:"white"
        })
        console.log(this.props.history);
        this.props.history.push("/Game");

    }
    Joke =(event)=>{
        event.target.classList.add("hovered");
    }
    JokeReverse =(event)=>{
        event.target.classList.remove("hovered");
    }

    render(){
        return(
            <div>
                    <button className={'button__main tooltip'} onClick={this.onClick} onMouseEnter={this.Joke} onMouseLeave={this.JokeReverse}>
                        Let's get started
                        <span className={ 'tooltiptext'}>It might be better if U practise a bit before the start:)</span>
                    </button>

            </div>
        )
    }
}

export default withRouter(Button);