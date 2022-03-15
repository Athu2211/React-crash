import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import './Menu.css';

function Menu(props) {
    const menu = props.dishes;

    return (
        <Container className="menuItem">
            <Row>
                {
                    menu.map((dish) => {
                        return (
                            <Col xs={12} md={3}>
                                <Card  key={dish.id} onClick={() => props.onClick(dish.id)}>
                                    <Card.Img variant="top" src={dish.image} alt={dish.name} />
                                    <Card.Body>
                                        <Card.Title>{dish.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Menu;