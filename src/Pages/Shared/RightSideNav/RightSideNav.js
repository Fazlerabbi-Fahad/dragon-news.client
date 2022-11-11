import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import BrandCarosol from '../BrandCarosol/BrandCarosol';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoggleLogIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoggleLogIn} className='mb-2' variant="outline-primary"><FaGoogle /> Signin With Google</Button>
                <Button variant="outline-dark"><FaGithub /> Signin With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarosol></BrandCarosol>
            </div>

        </div>
    );
};

export default RightSideNav;