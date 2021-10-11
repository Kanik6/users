import React from 'react';
import './Header.css';
import {Link, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetContactToUpdate} from "../../../store/actions/UserActions";
import {Navbar,Container, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {

    const dispatch = useDispatch();

    const handleAddContact = () => {
        dispatch(resetContactToUpdate());
    }

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



{/* <header className="header">
            <span>Contacts</span>
            <NavLink to="/form"><button onClick={handleAddContact}>Add new contact</button></NavLink>

        </header> */}