import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-sm-3 align-self-center">
                        <div style={{marginTop:'10px'}}>
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>&nbsp;
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>&nbsp;
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>&nbsp;
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>&nbsp;
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;