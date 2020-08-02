import React, { Component } from 'react';

class Course extends Component {
	state = {
		title: ''
	};
	componentDidMount() {
		this.logCourse();
	}

	componentDidUpdate() {
		this.logCourse();
	}

	logCourse = () => {
		const query = new URLSearchParams(this.props.location.search);
		for (let param of query.entries()) {
			if (this.state.title !== param[1]) {
				this.setState({ title: param[1] });
			}
		}
	};
	render() {
		// const courseTitle = this.state.title;

		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>You selected the Course with ID:{this.props.match.params.course_id}</p>
			</div>
		);
	}
}

export default Course;
