import React, { Component } from 'react';
import CodeDoc from './CodeDoc';
import './App.css';
import './AppForm.css';
import Header from './Header';
import SectionBlank from './SectionBlank';
import SectionChoices from './SectionChoices';
import SectionIntro from './SectionIntro';
import SectionIssues from './SectionIssues';
import SectionProtoAlpha from './SectionProtoAlpha';
import Footer from './Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'intro',
      alphaDoc: null,
      updated: null,
    };
    // these are added to properly register the scope of 'this' in the methods
    this.createAlphaDoc = this.createAlphaDoc.bind(this);
    this.appendAlphaDoc = this.appendAlphaDoc.bind(this);
  }

  createAlphaDoc(isVertical, spanSize, title)
  {
    let doc = new CodeDoc(isVertical, spanSize, title);
    this.setState({
      alphaDoc: doc,
    });
  }

  appendAlphaDoc(newText)
  {
    this.state.alphaDoc.append(newText);
    this.setState({updated: this.state.alphaDoc.updatedUnixTime});
  }

  handleChangeSection(newMode){
    this.setState({
      mode: newMode,
    });
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
      case "protoAlpha":
        section = <SectionProtoAlpha updated={this.state.updated} appendAlphaDoc={this.appendAlphaDoc} createAlphaDoc={this.createAlphaDoc} doc={this.state.alphaDoc}/>;
      break;
      default:
        section = <SectionBlank/>;
      break;
    }
    return (
      <div className="App">
        <Header />
        <SectionChoices handleChangeSection={(a) => this.handleChangeSection(a)} mode={this.state.mode} />
        {section}
        <Footer />
      </div>
    );
  }
}

export default App;
