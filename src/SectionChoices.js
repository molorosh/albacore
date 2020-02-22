import React, { Component } from 'react';
import ChoiceButton from './ChoiceButton';

class SectionChoices extends Component {
    constructor(props){
        super(props);
    }

    handleClick(newMode){
        // we will pass this to the parent object to propogate
        this.props.handleChangeSection(newMode);
    }

    render(){
        return (
            <section className="App-section-choices">
                <p>
                    <ChoiceButton 
                        handleClick={() => this.handleClick("intro")}
                        mode={this.props.mode}  
                        value="intro"
                        text="Intro"
                        />
                    <ChoiceButton 
                        handleClick={() => this.handleClick("issues")}
                        mode={this.props.mode} 
                        value="issues"
                        text="Issues"
                        />
                    <ChoiceButton 
                        handleClick={() => this.handleClick("proto1")}
                        mode={this.props.mode}
                        value="proto1" 
                        text="Proto I"
                        />
                </p>
            </section>
        );
    }
}

export default SectionChoices;