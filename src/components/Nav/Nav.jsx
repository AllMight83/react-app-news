import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../Nav/Nav.css'



class Nav extends Component {
  render() {
    return (
  
    <nav className="navs--nav">
      <ul>
        <li className="header--nav-element"><Link to="/">Home</Link></li>
        <li className="Header--nav-element"><Link to="/form">Form</Link></li>
        <li className="Header--nav-element"><Link to="/list">List</Link></li>
      </ul>
    </nav>
  
    
    );
  }
}

export default Nav;
