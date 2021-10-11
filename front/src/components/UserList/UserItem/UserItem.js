import React from 'react';
import './UserItem.css';
import {useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {deleteUser} from "../../../store/actions/UserActions";
import { ListGroup , Button, Row, Col} from 'react-bootstrap';


const UserItem = ({id, fullName, birthDate, gender}) => {

    const dispatch = useDispatch();

    const handleDelete = (userId) => {
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
                        <Button as={Link} to={`/form/${id}`} size="md">update</Button>
                        
                    </Col>
                    <Col md={2}>
                        <Button onClick={() => handleDelete(id)} variant="danger">delete</Button>
                    </Col>
                </Row>
           </ListGroup.Item>
    );
};

export default UserItem;