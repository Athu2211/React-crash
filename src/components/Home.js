import React from 'react';
import { Card } from 'react-bootstrap';
import { baseUrl } from '../data/baseUrl';
import Loading from './Loading';

function RenderCard({ item, isLoading, errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <Card>
                <Card.Img src={baseUrl + item.image} alt={item.name} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null}
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
            </Card>
        );

}

function Home({ dish, promotion, leader, dishesLoading, dishesErrMess, promoLoading, promoErrMess }) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={dish} isLoading={dishesLoading} errMess={dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={promotion} isLoading={promoLoading} errMess={promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;