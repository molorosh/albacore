import React, { Component } from 'react';

class SectionProtoAlpha extends Component{
  constructor(props){
    super(props);
    // these are added to properly register the scope of 'this' in the methods
    this.createDocClick = this.createDocClick.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  createDocClick(){
    let titleElement = document.getElementById('protoAlphaTitleCreate');
    let title = titleElement.value;
    let isVerticalElement = document.getElementById('protoAlphaOrientationCreate');
    let isVertical = isVerticalElement.options[isVerticalElement.selectedIndex].value;
    let sizeElement = document.getElementById('protoAlphaSizeCreate');
    let size = sizeElement.options[sizeElement.selectedIndex].value;
    this.props.createAlphaDoc(isVertical, size, title);
  }

  doAction(){
    let newTextElement = document.getElementById('protoAlphaNewTextEdit');
    let newText = newTextElement.value;
    console.log("SectionProtoAlpha(「" + newText + "」)")
    document.getElementById('protoAlphaNewTextEdit').value = "";
    this.props.appendAlphaDoc(newText);
    }

  render(){
    let doc = this.props.doc;
    let ux = null;
    if(doc === null || doc === undefined){
      // the CREATE mode
      ux = <div>
        <p>
          <span className="formLabel">Orientation:</span> 
          <select id="protoAlphaOrientationCreate" defaultValue={false}>
            <option value={false}>Hoizontal</option>
            <option value={true}>Vertical</option>
          </select>
        </p>
        <p>
          <span className="formLabel">Size:</span>
          <select id="protoAlphaSizeCreate" defaultValue={30}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </p>
        <p>
          <span className="formLabel">Title:</span>
          <input defaultValue={"the doc title"}
            type="text" 
            id="protoAlphaTitleCreate"
            />
        </p>
        <p>
          <button className="formButton formButtonSubmit" onClick={this.createDocClick}>Create</button>
        </p>
      </div>;
    }else{
      let orientText = this.props.doc.isVertical === "true" ? "Vertical" : "Horizontal";
      // the EDIT mode
      ux = <div> 
      <p>
        <span className="propertySpan">
          <span className="propertySpanLabel">Size:</span> 
          <span className="propertySpanValue">{this.props.doc.spanSize}</span>
        </span>
        <span className="propertySpan">
          <span className="propertySpanLabel">Orientation:</span> 
          <span className="propertySpanValue">{orientText}</span>
        </span>
        <span className="propertySpan">
          <span className="propertySpanLabel">Title:</span> 
          <span className="propertySpanValue">{this.props.doc.title}</span>
        </span>
        <span className="propertySpan">
          <span className="propertySpanLabel">CreatedUnixTime:</span> 
          <span className="propertySpanValue">{this.props.doc.createdUnixTime}</span>
        </span>
      </p>
      <p>
          <span className="formLabel">New Text:</span>
          <input 
            type="text" id="protoAlphaNewTextEdit"
            />
        </p>
        <p>
          <button className="formButton formButtonAction" onClick={this.doAction}>Action</button>
        </p>
        <p>
          <span className="propertySpan">
            <span className="propertySpanLabel">CreatedUnixTime:</span> 
            <span className="propertySpanValue">{this.props.doc.updatedUnixTime}</span>
          </span>
        </p>
        <pre className="preDebug">{this.props.doc.debugPreview}</pre>
    </div>;
    }
    return (
        <section className="App-section">
          <h2>Proto: ἄλφα</h2>
          {ux}
        </section>
    );
  }
}

export default SectionProtoAlpha;