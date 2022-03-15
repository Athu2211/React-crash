import React, { Component } from 'react';
import { Container, Row, BreadcrumbItem, Breadcrumb, Col, Button  } from "react-bootstrap";
import {Form, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            mob: '',
            email: '',
            agree: false,
            contactType:'Tel.',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                mob: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.state));
    }
    
    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstName, lastName, mob, email) {
        const errors = {
            firstName: '',
            lastName: '',
            mob: '',
            email: ''
        };

        if (this.state.touched.firstName && firstName.length < 3)
            errors.firstName = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstName && firstName.length > 10)
            errors.firstName = 'First Name should be <= 10 characters';

        if (this.state.touched.lastName && lastName.length < 3)
            errors.lastName = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastName && lastName.length > 10)
            errors.lastName = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.mob && !reg.test(mob))
            errors.mob = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    render(){
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.mob, this.state.email)
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={3}>First Name</Label>
                            <Col md={9}>
                                <Input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    invalid={errors.firstName !== ''}
                                    onBlur={this.handleBlur('firstName')}
                                    onChange={this.handleInputChange}
                                    />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={3}>Last Name</Label>
                            <Col md={9}>
                                <Input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    invalid={errors.lastName !== ''}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('lastName')}/>
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="mob" md={3}>Contact Number</Label>
                            <Col md={9}>
                                <Input 
                                    type="tel" 
                                    id="mob" 
                                    name="mob" 
                                    placeholder="Number"
                                    value={this.state.mob}
                                    invalid={errors.mob !== ''}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('mob')}/>
                                <FormFeedback>{errors.mob}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={3}>Email</Label>
                            <Col md={9}>
                                <Input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email"
                                    value={this.state.email}
                                    invalid={errors.email !== ''}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('email')}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 3}}>
                                <FormGroup check>
                                    <Label check>
                                    <Input 
                                        type="checkbox" 
                                        name="agree" 
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange}/>{' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input 
                                    type="select" 
                                    name="contactType" 
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                        <option>Mobile</option>
                                        <option>Email</option>
                                    </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={3}>Your Feedback</Label>
                            <Col md={9}>
                                <Input 
                                    type="textarea" 
                                    id="message" 
                                    name="message" 
                                    rows="6"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset: 5}}>
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
}

export default Contact;