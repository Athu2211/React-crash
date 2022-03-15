import React from 'react';
import { Container, Row, BreadcrumbItem, Breadcrumb, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <Container style={{margin:'10px 0px'}}>
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Contact
                    </BreadcrumbItem>
                </Breadcrumb>
                <Col>
                    <h3>Contact</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Location Information</h3>
                </Col>
                <Col>
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </Col>
                <Col>
                    <h5>Map of our Location</h5>
                </Col>
                <Col>
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;