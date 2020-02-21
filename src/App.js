import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <ruby>鬢長 <rp>(</rp><rt>びんなが</rt><rp>)</rp></ruby>
        </h1>
      </header>
      <section className="App-section">
        <h2>Issues</h2>
        <p>There are several problems that I need to solve to have a workable solution.</p>
        <hr className="App-section-hr"/>
        <h3>Simple Method of editing HTML Ruby Markup</h3>
        <p>To get the visualising started early we need a simple way of editing the backend ruby notation.
          This will most likely help inform the end UX design.</p>
        <hr className="App-section-hr"/>
        <h3>Rendering Content in a Fixed Grid</h3>
        <p>The pages are typically a fixed row and column count.  So text must correctly 
          flow over pages</p>
        <hr className="App-section-hr"/>
        <h3>Special Problems with rendering in a grid</h3>
        <p>For example if a sentence ends at the end of a row the final punctuation mark 
          is "squashed" into the final kanji cell.</p>
        <hr className="App-section-hr"/>
        <h3>Horizontal and Vertical Rendering and Flow</h3>
        <p>Pages could be written in vertical or horizontal formatting</p>
        <hr className="App-section-hr"/>
        <h3>Smooth Text entry and intelisense</h3>
        <p>Previous experiments have revealed that editting character-by-character rows the native UI of
          it's ability to present auto-suggestions (which are vital to Japanese text entry).</p>
      </section>
      <footer className="App-footer">
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
