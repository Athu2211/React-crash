import React from 'react';
import { Card, Container, Row } from "react-bootstrap";

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
    const dish = props.dish

    if (dish == null) {
        return (<div></div>);
    }

    return (
        <Container>
            <Row>
                <RenderDish dish={dish} />
                <RenderComments comments={dish.comments} />
            </Row>
        </Container>
    )
}

export default Dish;