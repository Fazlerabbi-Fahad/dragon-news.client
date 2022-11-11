import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const nameREF = useRef()
    const handleForm = event => {

    }
    return (
        <div>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={user?.displayName} type="name" placeholder="Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;