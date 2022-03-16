import React, { Component } from 'react';
import { Container, Row, BreadcrumbItem, Breadcrumb, Col, Button  } from "react-bootstrap";
import { Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    handleSubmit(values) {
        console.log(JSON.stringify(values));
    }

    render(){
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
            <Row>
                <Col md={12}>
                    <h3>Send us your feedback</h3>
                </Col>
                <Col md={8}>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstName" md={3}>First Name</Label>
                            <Col md={9}>
                                <Control.text 
                                    model=".firstName" 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="First Name"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Label htmlFor="lastName" md={3}>Last Name</Label>
                            <Col md={9}>
                                <Control.text 
                                    model=".lastName" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Last Name"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Label htmlFor="mob" md={3}>Contact Number</Label>
                            <Col md={9}>
                                <Control.text 
                                    model=".mob" 
                                    id="mob" 
                                    name="mob" 
                                    placeholder="Number"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Label htmlFor="email" md={3}>Email</Label>
                            <Col md={9}>
                                <Control.text 
                                    model=".email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Col md={{size: 6, offset: 3}}>
                                <div className="form-check">
                                    <Label check>
                                    <Control.checkbox 
                                        model=".agree" 
                                        name="agree" 
                                        className="form-check-input"/>{' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Control.select 
                                    model=".contactType" 
                                    name="contactType" 
                                    className="form-control">
                                        <option>Mobile</option>
                                        <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Label htmlFor="message" md={3}>Your Feedback</Label>
                            <Col md={9}>
                                <Control.textarea 
                                    model=".message" 
                                    id="message" 
                                    name="message" 
                                    rows="6"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group mt-3">
                            <Col md={{size:10, offset: 5}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </Col>
            </Row>
        </Container>
    );
}
}

export default Contact;