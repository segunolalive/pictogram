import React, { Component } from 'react';
import './header.css';


const style = {
  width: '100%',
  textAlign: 'center',
  color: '#ffffff',
  backgroundColor: '#044f62',
  position: 'fixed',
  top: 0,
  margin: '0 0 1px',
  padding: '5px',
  letterSpacing: '3px',
  boxShadow: '2px 3px 5px 1px rgba(0, 0, 0, 0.2)',
}

const toggleStyles = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '3px',
  display: 'inline-block',
  position: 'absolute',
  bottom: '5px',
  left: '5px',
  color: '#044f62',

}

class Header extends Component {
  render () {
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

// <span className='toggle-filters'>Filters</span>
