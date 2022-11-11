import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext);
    useTitle('Register');

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                handleUserUpdate(name, photo);
                handleVerification();
                toast.success('Verify your mail');
            })
            .catch(error => setError(error.message))
    }

    const handleUserUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => setError(error.message))
    }

    const handleVerification = () => {
        emailVerify()
            .then(() => { })
            .catch(error => setError(error.message))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="name" placeholder="Enter your name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photo' type="text" placeholder="PhotoURL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className="text-muted">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;