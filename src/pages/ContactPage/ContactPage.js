import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import './ContactPage.css';
import ceo from '../../images/contact-us/IMG-20220118-WA0026.jpg'
import director from '../../images/contact-us/IMG_2857 - Copy-01 (1).jpg'
import emailjs from '@emailjs/browser'

const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'send_message', form.current, 'user_PIE7VqvDn7nMogYwfLTdR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div>
            <div className="contact-header">
                <Container>
                    <h1 className='text-white title-text'>Contact Us</h1>
                </Container>
            </div>
            <Container>
                <Row className='py-5'>
                    <div className="col-12 col-md-4 d-flex my-3">
                        <i class="far fa-envelope fs-1 text-danger me-4"></i> <h2 className="sub-title"><span className="fs-5">Have any question?</span> <br />haircolourbd@gmail.com </h2>
                    </div>
                    <div className="col-12 col-md-4 d-flex my-3">
                        <i class="fab fa-whatsapp fs-1 text-success me-4"></i> <h2 className="sub-title"><span className="fs-5">WhatsApp</span> <br />+8801774034756 <br /> +8801750400876</h2>
                    </div>
                    <div className="col-12 col-md-4 d-flex my-3">
                        <i class="fas fa-map-marker-alt fs-1 text-warning me-4"></i> <h2 className="sub-title fs-5"><span className="fs-5">Want to visit?</span> <br />
                            46/A, Promy Socity, Moynartek <br />
                            Uttarkhan, Dhaka - 1230
                        </h2>
                    </div>
                </Row>
                <Row>
                    <div className="col-12 col-md-5 text-end pe-5">
                        <h2 className="sub-title fs-2">Write A Message</h2>
                        <p className="text-danger">Office Hours : Saturday to Thursday from (9:00A.M to 6:00 P.M)</p>
                        <p>If you got any question, please do not hesitate to send us a message.</p>
                        <p><span className="fw-bold">Address:</span> <br /> 46/A, Promy Socity, Moynartek <br /> Uttarkhan, Dhaka-1230, Bangladesh <br />
                            <span className="fw-bold">WhatsApp:</span> : +8801774035756 <br /> +8801750400876 <br />
                            <span className="fw-bold">Email:</span> : <a href="mailto:haircolourbd@gmail.com">haircolourbd@gmail.com</a> <br />
                            <span className="fw-bold">Website:</span> : <a href="https://hair-colour.netlify.app">https://hair-colour.netlify.app</a> </p>
                    </div>
                    <div className="col-12 col-md-7 mt-3">
                        <form className='send-email' ref={form} onSubmit={sendEmail}>
                            <input placeholder='Name' type="text" name="name" /> <br />
                            <input placeholder='Email' type="email" name="email" /> <br />
                            <input placeholder='Subject' type="text" name="subject" /> <br />
                            <textarea placeholder='Type Your Message Here' name="message" /> <br />
                            <input className='btn-regular' type="submit" value="Send" />
                        </form>
                    </div>
                </Row>
                <Row className='mt-5 pt-5'>
                    <div className="col-12 col-md-5 text-end pe-5 mb-4">
                        <h2 className="sub-title fs-2">Message From the CEO</h2>
                        <h5 className='m-0'>- Mr. Al-amin Islam</h5>
                        <img className='person-img' src={ceo} alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h2 className="sub-title">Welcome to Hair<span className="main-color">Color</span></h2>
                        <p>Welcome to HAIR COAT!
                            Since our establishment in 2007, we have been striving here to reduce individuals’ stress, depression, hair challenge by providing the finest quality, most natural-looking and comfortable hair systems. <br /> <br />

                            Our customers have come to expect reliability in everything we do for them, from product performance through the order process to our final delivery. <br /> <br />

                            We believe that maintaining the quality of hair system is more important than manufacturing of a huge quantity of cheap products. Therefore, you would hopefully find us pretty convenient and competitive considering the standard of quality we try to maintain. <br /> <br />

                            We exceed in serving our customers with a focus on quality and reliable execution. The basis of our operations and the key to our success is our level of customer satisfaction.  <br /><br />

                            We always love making our customers feel happy.</p>
                    </div>
                </Row>
                <Row className='my-5'>
                    <div className="col-12 col-md-5 text-end pe-5 mb-4">
                        <h2 className="sub-title fs-2">Message From the Director</h2>
                        <h5 className='m-0'>- Md. Rasel Islam Khan</h5>
                        <img className='person-img' src={director} alt="" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h2 className="sub-title">Hope you will like Us!</h2>
                        <p>Welcome to HAIR COAT!
                            Since our establishment in 2007, we have been striving here to reduce individuals’ stress, depression, hair challenge by providing the finest quality, most natural-looking and comfortable hair systems. <br /> <br />

                            Our customers have come to expect reliability in everything we do for them, from product performance through the order process to our final delivery. <br /> <br />

                            We believe that maintaining the quality of hair system is more important than manufacturing of a huge quantity of cheap products. Therefore, you would hopefully find us pretty convenient and competitive considering the standard of quality we try to maintain. <br /> <br />

                            We exceed in serving our customers with a focus on quality and reliable execution. The basis of our operations and the key to our success is our level of customer satisfaction.  <br /><br />

                            We always love making our customers feel happy.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;