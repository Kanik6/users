import React, {useState} from 'react';
import './UserItem.css';
import Modal from "../../UI/Modal/Modal";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../../store/actions/UserActions";
import { ListGroup , Button, Row, Col} from 'react-bootstrap';


const UserItem = ({id, fullName, birthDate, gender}) => {

    const dispatch = useDispatch();

    const handleDelete = (userId) => {
        console.log("delete " + userId);
        dispatch(deleteUser(userId));
    }

    return (
            <ListGroup.Item className="mt-3">
                <Row>
                    <Col className="overflow-hidden" md={2}><span>{id}</span></Col>
                    <Col md={2}><span>{fullName}</span></Col>
                    <Col md={2}><span>{birthDate}</span></Col>
                    <Col md={2}><span>{gender}</span></Col>
                    <Col md={2}>
                        <Button size="md">update</Button>
                    </Col>
                    <Col md={2}>
                        <Button onClick={() => handleDelete(id)} variant="danger">delete</Button>
                    </Col>
                </Row>
                {/* <span></span>
                <span></span>
                <span></span>
                <span></span> */}
               
           </ListGroup.Item>
    );
};

export default UserItem;