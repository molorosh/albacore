import React from 'react';
import logo from './logo.png';

function SectionIntro(props){
    return (
        <section className="App-section">
          <h2>Albacore</h2>
          <p><img src={logo} alt="stylised albacore fish"/></p>
          <p>a prototype for online and offline editing of Japanese text that's as close as possible to Genko Yoshi.</p>
        </section>
    );
}

export default SectionIntro;