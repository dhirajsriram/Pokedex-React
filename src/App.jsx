import React, { Component } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Menubar from './common/menu/Menubar';
import About from './pages/about/About';
import { Route , Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import { description } from './pages/description/description'

const theme = createMuiTheme({
	palette: {
		primary: { main: red[500] }, 
		secondary: { main: '#11cb5f' }
	}
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: ''
		};
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Menubar/>
				<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Home" component={Home} />
				<Route exact path="/description/:id" component={description} />
				<Route exact path="/About" component={About} />
				</Switch>
			</ThemeProvider>
		);
	}
}

export default App;
