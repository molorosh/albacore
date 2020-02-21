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
        <h2>Aspiration</h2>
        <p>a prototype for online and offline editing of Japanese text that's as close as possible to Genko Yoshi.</p>
        <h2>Issues</h2>
        <p>There are several problems that I need to solve to have a workable solution.</p>
        <hr className="App-section-hr"/>
        <h3>Simple Method of editing HTML Ruby Markup</h3>
        <p>To get the visualising started early, we need a simple way of editing the backend ruby notation.
          This will most likely help inform the end UX design.</p>
        <hr className="App-section-hr"/>
        <h3>Rendering Content in a Fixed Grid</h3>
        <p>The pages are typically a fixed row and column count.  So text must correctly 
          flow over pages.</p>
        <hr className="App-section-hr"/>
        <h3>Special Problems with Rendering in a Grid</h3>
        <p>For example, if a sentence ends at the end of a row the final punctuation mark 
          is "squashed" into the final kanji cell.</p>
        <hr className="App-section-hr"/>
        <h3>Horizontal and Vertical Rendering and Flow</h3>
        <p>Pages could be written in vertical or horizontal formatting.</p>
        <p>It would be nice to be able to include blocks for things like images too.</p>
        <hr className="App-section-hr"/>
        <h3>Smooth Text Entry and Intelisense</h3>
        <p>Previous experiments have revealed that editing in a character-by-character style robs the native UI of
          it's ability to present auto-suggestions (which are vital to Japanese text entry).</p>
        <p>We may have to do some clever 'diffing' to incorporate the new text into the existing text flow.</p>
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
