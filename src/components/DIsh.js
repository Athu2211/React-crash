import React, { Component } from "react";
import { Container, Col, Row, Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../data/baseUrl';
import Loading from './Loading';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {

    return (
        <div className='col-12 col-md-5 m-1'>
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

function RenderComments({ comments, postComment, dishId }) {
    if (comments != null)
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author},
                                    &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(new Date(comment.date))}
                                    </p>
                                </li>
                            )
                        })}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    else
        return (<div></div>)
}


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <div>
                <Button variant="outline-secondary" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating"
                                        name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group  mt-3">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text
                                        model=".author"
                                        id="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must contain atleast 3 characters',
                                            maxLength: 'Should not exceed 15 characters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={{ size: 10, offset: 5 }}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

class Dish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDishDetail: this.props.dsdetail,
            isModalOpen: false
        };
    }


    render() {
        if (this.props.isLoading) {
            return (
                <Container>
                    <Row>
                        <Loading />
                    </Row>
                </Container>
            )
        }
        else if (this.props.errMess) {
            return (
                <Container>
                    <Row>
                        <h4>{this.props.errMess}</h4>
                    </Row>
                </Container>
            )
        }
        else if (this.props.dish != null)
            return (
                <Container>
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {this.props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Col>
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <RenderDish dish={this.props.dish} />
                        <RenderComments comments={this.props.comments}
                            postComment={this.props.postComment}
                            dishId={this.props.dish.id} />
                    </Row>
                </Container>
            )
    }

}

export default Dish;