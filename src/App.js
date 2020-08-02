import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Navbar from './containers/NavBar/Navbar';

import NoMatch from './component/NoMatch/NoMatch';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path="/users" component={Users}>
							{' '}
						</Route>

						<Route path="/courses" component={Courses} />
						{/* <Route path="/courses/:course_id" component={Course} /> */}
						<Redirect from="/all-courses" to="/courses" />
						<Route render={() => <NoMatch />} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
