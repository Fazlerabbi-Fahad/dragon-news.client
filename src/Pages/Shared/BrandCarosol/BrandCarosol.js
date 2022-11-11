import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../../assests/brand/logo.jpg'
import logo2 from '../../../assests/brand/logo2.jpg'

const BrandCarosol = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarosol;