import React from 'react';
import fish from './hsif.png';

function Header() {
    return (
        <header className="App-header">
          <h1>
            <img src={fish} alt="an albacore fish"/>
            <ruby>鬢長 <rp>(</rp><rt>びんなが</rt><rp>)</rp></ruby>
          </h1>
        </header>
    );
}


export default Header;