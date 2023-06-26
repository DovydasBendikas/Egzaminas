import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

class Header extends Component {
  render() {

    return (
        <div>
           <Navbar className="d-flex justify-content-center">
        <Nav.Link className="p-2 text-decoration-none text-secondary" href="/">
          Pagrindinis
        </Nav.Link>
        <Nav.Link
          className="p-2 text-decoration-none text-secondary"
          href="upload"
        >
          Įkelti
        </Nav.Link>
      </Navbar>
      <hr />
        </div>
    )
    }
}

export default Header