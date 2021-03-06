import React from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';
import { Media } from 'reactstrap';
import { FadeTransform, Stagger } from 'react-animation-components';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { baseUrl } from '../data/baseUrl';

function RenderLeader(props) {
    const leader = props.leaders.leaders.map(leader => {
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Stagger in>
                    <Media className="mt-5">
                        <Media left>
                            <Media className="mr-5" object src={baseUrl + leader.image} alt={leader.name} />
                        </Media>
                        <Media body>
                            <Media heading>
                                {leader.name}
                            </Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                        </Media>
                    </Media>
                </Stagger>
            </FadeTransform>
        )
    });

    if (props.leaders.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.leaders.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.leaders.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <ul className='list-unstyled'>
                {leader}
            </ul>
        )
}

function About(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <p>Leader {leader.name}</p>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <Card.Header className="bg-primary text-white">Facts At a Glance</Card.Header>
                        <Card.Body>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <Card.Body className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer mt-1">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <RenderLeader leaders={props.leaders} />
                </div>
            </div>
        </div>
    );
}

export default About;    