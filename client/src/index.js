import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Views
import App from './views/App';
import Home from './views/Home';
import CreateClient from './views/CreateClient';
import ErrorDisplay from './views/ErrorDisplay';

ReactDOM.render(

	<Router>
	  <App>
		  <Route exact path='/' component={Home}/>
          <Rout exact path='/cadastro-cliente' component={CreateClient}/>
		  <Route exact path='/error' component={ErrorDisplay}/>
		  <Route exact path='/extrato' component={Home}/>
          <Rout exact path='/relatorio' component={CreateClient}/>
		  <Route exact path='/saldo-todos' component={ErrorDisplay}/>
	  </App>
	</Router>

,document.getElementById('root'));

