import React from 'react';
import './AboutHeader.css'
import { Container, Row } from 'react-bootstrap';
import img1 from '../../images/home-about/Home-pic-1.jpg'
import img3 from '../../images/home-about/Grow-hair-naturally-2.jpg'
import img2 from '../../images/home-about/hair-size.jfif'

const AboutHeader = () => {
    return (
        <div className='about-header'>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 mt-4 mb-4">
                        <h2 className="title-text mb-4">Welcome to Hair Colour.</h2>
                        <p>Hair Colour is one of the largest wig manufacturing companies based in Dhaka, Bangladesh. We hold expertise in stock human hairpiece/toupee manufacturing, men's and women's custom hairpieces as well as wigs manufacturing.</p>
                        <p>In 2007, we started our journey of manufacturing hair replacement systems with...</p>
                        <button className="btn-regular">Read More...</button>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-4">
                        <img className='card-image' src={img1} alt="" />
                        <h3 className='sub-title'>Custom Hairpiece & Wig Base Options</h3>
                        <p>We have a wide range of customized options made from comfortable, secure, breathable fabrics that look just like your scalp.
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-4">
                        <img className='card-image' src={img2} alt="" />
                        <h3 className='sub-title'>Custom Wig Order Form</h3>
                        <p>We are the best wig manufacturing company in Bangladesh. We make Wigs according to both of your custom order form with Template/Mould/Pattern/Cast and our web form.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-4">
                        <img className='card-image' src={img3} alt="" />
                        <h3 className='sub-title'>Hair Care</h3>
                        <p>Hair Care Human hairpieces/wigs are the premier choice if you want adaptability and luxury. Human hair is soft to the touch and can be styled endless ways..</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutHeader;