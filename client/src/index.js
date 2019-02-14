import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Views
import App from './views/App';
import Home from './views/Home';
import CreateClient from './views/CreateClient';
import ErrorDisplay from './views/ErrorDisplay';
import Statement from './views/Statement';
import Report from './views/Report';
import ClientsBalance from './views/ClientsBalance';

ReactDOM.render(

	<Router>
		<App>
			<Route exact path='/' component={Home} />
			<Route exact path='/cadastro-cliente' component={CreateClient} />
			<Route exact path='/error' component={ErrorDisplay} />
			<Route path="/extrato" component={Statement} />
			<Route exact path='/relatorio' component={Report} />
			<Route exact path='/saldo-todos' component={ClientsBalance} />
			<Route exact path='/resposta' component={Response} />
		</App>
	</Router>

	, document.getElementById('root'));

