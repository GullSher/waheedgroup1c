import React from 'react';

const ContactUs = () => {
    return (
        <div className="breadcrumb-section jarallax pixels-bg" data-jarallax data-speed="0.6">
            <div className="container text-center">
                <h1>Contact Us </h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Contact Us </a></li>
                </ul>
                {/* </div> */}
                {/* </div> */}
                <div className="section-block grey-bg">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h3 className="semi-bold font-size-30">We Are Glad We Can Help You</h3>
                            <div className="section-heading-line line-thin"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br />ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <form className="primary-form-2 mt-45" id="contactForm" method="post">
                            <div className="row">

                                <div className="col-md-10 col-sm-12 col-12 offset-md-1">
                                    <div id="err" style={{ marginBottom: '50px' }}></div>
                                    <div className="row">

                                        <div className="col-md-12"> <input type="text" name="subject" placeholder="Subject" /> </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12"> <input type="text" name="name" placeholder="Name" />
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12"> <input type="email" name="email"
                                            placeholder="E-mail" /> </div>
                                        <div className="col-md-12"> <textarea name="message" placeholder="Message"></textarea> </div>
                                        <div className="col-md-12"> <input type="submit" className="button-md button-primary full-width"
                                            // style={{backgroundColor:'#ef4036' value="Send Message" /> </div>
                                            style={{ backgroundColor: '#ef4036' }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div >

        </div >


    );
};

export default ContactUs;

