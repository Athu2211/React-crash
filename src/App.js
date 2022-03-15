import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Dish from './components/Dish';
import { DISHES } from './data/dishes';
import { COMMENTS } from './data/comments';
import { LEADERS } from './data/leaders';
import { PROMOTIONS } from './data/promotions';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS
		}
	}

	render() {

		const HomePage = () => {
			return(
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
			)
		}

		const DishDetail = ({match}) => {
			return(
				<Dish dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
 					comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
			)
		}

		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path='/home' component={HomePage} />
						<Route exact path='/contactus' component={Contact} />
						<Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
						<Route path='/menu/:dishId' component={DishDetail} />
						<Redirect to='/home' />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
