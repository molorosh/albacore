import React from 'react';
import logo from './logo.png';

function SectionIntro(props){
    return (
        <section className="App-section">
          <h2>Intro</h2>
           <p>Albacore is a prototype web app for online and offline editing of Japanese text that's as close as possible to Genko Yoshi.</p>
           <p><img src={logo} alt="stylised albacore fish"/></p>
        </section>
    );
}

export default SectionIntro;