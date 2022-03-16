import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigStore } from './redux/configStore';
import Main from './components/Main';
import './App.css';

const store = ConfigStore();

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
