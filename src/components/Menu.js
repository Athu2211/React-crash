import React from 'react';
import { Card, Container, Col, Row, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu(props) {
    const menu = props.dishes;

    return (
        <Container className="menuItem">
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <Col>
                    <h3>Menu</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                {
                    menu.map((dish) => {
                        return (
                            <Col xs={12} md={3}>
                                <Card key={dish.id}>
                                    <Link to={`/menu/${dish.id}`}>
                                        <Card.Img variant="top" src={dish.image} alt={dish.name} />
                                        <Card.Body>
                                            <Card.Title>{dish.name}</Card.Title>
                                        </Card.Body>
                                    </Link>
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