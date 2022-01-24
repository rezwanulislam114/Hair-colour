import React from 'react';
import { Container } from 'react-bootstrap';
import './WhyUs.css'
import img from '../../images/why-us/young-wide-smiling-brown-haired-woman-touching-own-perfect-voluminous-curls-beautiful-model-long-dense-curly-hairstyle-139326502.jpg'

const WhyUs = () => {
    return (
        <div className='why-us'>
            <Container>
                <div className="row align-items-center">
                    <div className="col-sm-6 col-12">
                        <h1 className='title-text'>Why Choose Us?</h1>
                        <p className='ps-4 mt-5 fs-4'><i className="fas fa-caret-right me-2"></i>Super Fast Production Schedules</p>
                        <p className='ps-4 mt-3 fs-4'><i className="fas fa-caret-right me-2"></i>Excellent After Sales Service</p>
                        <p className='ps-4 mt-3 fs-4'><i className="fas fa-caret-right me-2"></i>High Quality and Affordable</p>
                        <p className='ps-4 mt-3 fs-4'><i className="fas fa-caret-right me-2"></i>Customer Value and Satisfaction</p>
                        <p className='ps-4 mt-3 fs-4'><i className="fas fa-caret-right me-2"></i>Prompt Response</p>
                        <button className='btn-regular mt-4'>Learn More About Us <i class="ms-2 fas fa-paper-plane"></i></button>
                    </div>
                    <div className="col-sm-6 col-12">
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUs;