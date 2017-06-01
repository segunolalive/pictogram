import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render () {
    const style = {
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: '#044f62',
      margin: '0 0 1px',
      padding: '5px',
      letterSpacing: '3px',
    }
    return (
      <header style={style}>
        <h1>
          PICTOGRAM
        </h1>
      </header>
    );
  }
}

export default Header;
