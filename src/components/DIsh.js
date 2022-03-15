import React from 'react';
import { Card, Container, Row, BreadcrumbItem, Breadcrumb, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {

    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <Card.Img src={dish.image} alt={dish.name} />
                    <Card.Body>
                        <Card.Title> {dish.name}</Card.Title>
                        <Card.Text> {dish.description} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments == null) {
        return (<div></div>)
    }
    const cmnts = comments.map(comment => {
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
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>

        </div>
    )
}

function Dish(props) {

    if (props.dish == null) {
        return (<div></div>);
    }

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
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <Col>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </Row>
        </Container>
    )
}

export default Dish;