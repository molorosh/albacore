import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionBlank from './SectionBlank';
import SectionChoices from './SectionChoices';
import SectionIntro from './SectionIntro';
import SectionIssues from './SectionIssues';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'issues',
    };
  }

  render() {    
    let section;
    switch(this.state.mode){
      case "issues":
        section = <SectionIssues/>;
      break;
      case "intro":
        section = <SectionIntro/>;
      break;
      case "proto1":
        section = <SectionBlank/>;
      break;
      default:
        section = <SectionBlank/>;
      break;
    }
    return (
      <div className="App">
        <Header />
        <SectionChoices mode={this.state.mode} />
        {section}
        <Footer />
      </div>
    );
  }
}

export default App;
