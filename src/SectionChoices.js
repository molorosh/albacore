import React, { Component } from 'react';
import ChoiceButton from './ChoiceButton';

class SectionChoices extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section className="App-section-choices">
                <p>
                    Selected: <b>{this.props.mode}</b>
                    
                    <ChoiceButton 
                        mode={this.props.mode} 
                        value='intro' 
                        text='Intro'
                        />
                    <ChoiceButton 
                        mode={this.props.mode} 
                        value='issues' 
                        text='Issues'
                        />
                    <ChoiceButton 
                        mode={this.props.mode} 
                        value='proto01' 
                        text='Proto I'
                        />
                </p>
            </section>
        );
    }
}

export default SectionChoices;