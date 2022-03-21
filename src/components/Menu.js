import React from 'react';
import { Card, Container, Col, Row, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './Menu.css';

function Menu(props) {
    const menu = props.dishes.dishes;

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
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