import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {Navbar,Container, Nav} from 'react-bootstrap'

const Header = () => {

    return (
            <Navbar bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/form">Add User</Nav.Link>
                    </Nav>
               </Container>
            </Navbar>
    );
};

export default Header;