import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark py-5 text-white footer'>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3">
                        <h2 className="sub-title mb-4">Hair<span className='main-color' >Color</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex quaerat hic ullam placeat. Autem asperiores quasi suscipit, commodi eius quod
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <h2 className="sub-title mb-4">Contact Info.</h2>
                        <p>
                            46/A, Motlob Market, Kachabazar <br /> Daskhinkhan, Dhaka-1230, Bangladesh <br /> <br />
                            WhatsApp : +8801774034756 <br />
                            E-mail : haircolour@gmail.com <br />
                            Web: www.haircolour.com <br /> <br />
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <h2 className="sub-title mb-4">Quick Link</h2>
                        <p className='quick-link'>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Services</a>
                            <a href="">Contact Us</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <h2 className="sub-title mb-4">Follow Us</h2>
                        <p className='follow-us'>
                            <p><a href=""><i class="fab fa-facebook"></i></a></p>
                            <p><a href=""><i class="fab fa-twitter"></i></a></p>
                            <p><a href=""><i class="fab fa-instagram"></i></a></p>
                            <p><a href=""><i class="fab fa-linkedin"></i></a></p>
                        </p>
                    </div>
                </div>
                <p className='text-center mt-5 mb-0'>copyright @Hair<span className="main-color">Color</span> 2022</p>
            </Container>
        </div>
    );
};

export default Footer;