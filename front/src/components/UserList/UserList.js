import React, {useEffect} from 'react';
import './UserList.css';
import UserItem from "./UserItem/UserItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../store/actions/UserActions";
import { ListGroup ,Container, Row, Col} from 'react-bootstrap';

const UserList = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, users])

    return (
        <ListGroup>
            <Container>
                <ListGroup.Item>
                    <Row className="font-weight-bold">
                        <Col md={2}><span>Id</span></Col>
                        <Col md={2}><span>Full name</span></Col>
                        <Col md={2}><span>Birth date</span></Col>
                        <Col md={2}><span>Gender</span></Col>
                    </Row>
                </ListGroup.Item>
                {users.map(user => {
                        return <UserItem key={user._id}
                                            id={user._id}
                                            fullName={user.fullName}
                                            birthDate={user.birthDate}
                                            gender={user.gender}
                                            />
                    })}
           </Container>
           
        </ListGroup>
    );
};

export default UserList;