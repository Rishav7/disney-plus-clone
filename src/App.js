import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Details from './components/Details'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route path='/detail/:id'>
						<Details />
					</Route>
					<Route path='/home'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
