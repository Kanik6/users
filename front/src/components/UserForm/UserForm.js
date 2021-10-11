import React, {useState, useEffect} from 'react';
import './UserForm.css';
import {useDispatch, useSelector} from "react-redux";
import {createUser, fetchUsers, fetchSingleUser, updateUser} from "../../store/actions/UserActions";
import {NavLink} from "react-router-dom";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const UserForm = props => {

    const dispatch = useDispatch();
    const userToUpdate = useSelector(state => state.userToUpdate);

    const [user, setUser] = useState({
        'fullName': '',
        'birthDate': '',
        'gender': '',
    });

    useEffect(() => {
        if(props.match.params.id) {
            dispatch(fetchSingleUser(props.match.params.id));
        }

    }, [dispatch, props.match.params.id])

    useEffect(() => {
        if(userToUpdate) {
            setUser(userToUpdate);
        }
    }, [userToUpdate])

    const handleChange = (event) => {
        const {name, value} = event.target;
        const userCopy = {...user};
        userCopy[name] = value;
        setUser(userCopy);
    }

    const setGender = event => {
        const userCopy = {...user};
        userCopy.gender = event.target.value;
        setUser(userCopy);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userToUpdate) {
            dispatch(updateUser(props.match.params.id, user, props.history));
            dispatch(fetchUsers());
            setUser({
                'fullName': '',
                'birthDate': '',
                'gender': '',
            });
            props.history.push("/");
        } else {
            dispatch(createUser(user));
            setUser({
                'fullName': '',
                'birthDate': '',
                'gender': '',
            });
            props.history.push("/");
        }
    }

    return (
        <Container>
            <Row>
                {console.log(user)}
                <Col md={{span:8 , offset:2}}>
                    <Form className="form mt-4" onSubmit={handleSubmit}>
                        <Form.Group controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="fullName"
                                placeholder="Enter full name" 
                                onChange={handleChange}
                                value={user.fullName || ''}
                             />
                        </Form.Group>

                        <Form.Group controlId="formBirthDate">
                            <Form.Label>BirthDate</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Birthdate"
                                name="birthDate"
                                placeholder="Enter birhtdate" 
                                onChange={handleChange}
                                value={user.birthDate || ''}
                               />
                        </Form.Group>

                        <Form.Group controlId="formGender" onChange={event => setGender(event)}>
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender" 
                                value="female"
                                defaultChecked={user.gender === "female"}/>
                            <Form.Check
                                type="radio"
                                label="Male" 
                                name="gender" 
                                value="male"
                                defaultChecked={user.gender === "male"}/>
                        </Form.Group> 
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
};

export default UserForm;