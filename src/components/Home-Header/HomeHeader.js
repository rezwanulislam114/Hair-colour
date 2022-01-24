import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../../images/home-header/images (1).jpg'
import secondImg from '../../images/home-header/images (2).jpg'

const HomeHeader = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1'>Custom Design</h3>
                        <p className='fs-2'>Your design, our responsibility.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1'>Custom Design</h3>
                        <p className='fs-2'>Your design, our responsibility.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeHeader;