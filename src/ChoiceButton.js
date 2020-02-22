import React, { Component } from 'react';
import './ChoiceButton.css';

class ChoiceButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            // if still empty
        }
    }

    render(){
        let extraClass;
        if(this.props.mode === this.props.value){
            extraClass = "Choice-button-selected"
        }else{
            extraClass = "Choice-button-not-selected"
        }
        // using an ES6 string literal `Hello ${Surname}.`
        return (
            <button 
                className={`Choice-button ${extraClass}`}
                onClick={this.props.handleClick}
                >
                {this.props.text}
            </button>
        );
    }
}

export default ChoiceButton;