/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-7 col-sm-5">
                    <h5>My Address</h5>
                    <address>
		              Leopalace<br />
		              Shiga, Hikone<br />
		              JAPAN<br />
		              <i className="fa fa-phone fa-lg"></i>: +84386960463<br />
		              <i className="fa fa-fax fa-lg"></i>: +84 386 960 463<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:anhttFX13476@funix.edu.vn">
                      anhttFX13476@funix.edu.vn</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;