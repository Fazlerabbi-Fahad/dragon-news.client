import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>{user?.displayName}
                                            <Button onClick={handleLogOut} variant="light">Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Button variant="secondary"><Link to='/login'>Login</Link></Button>
                                            <Button variant="secondary"><Link to='/register'>Register</Link></Button>
                                        </>
                                }
                            </Nav.Link>
                            <Link to="/profile">
                                {user?.photoURL ?
                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                    :
                                    <FaUser></FaUser>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;