import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import LeagueOfLegendsLogo from 'assets/img/lolLogo.png';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand>
                    <Link className="navbar-brand" to="">
                    <img
                        src={LeagueOfLegendsLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="LoL logo"
                    /> League Of Legends </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/champions">Champions</Link>
                        <Link className="nav-link" to="/items">Items</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;

