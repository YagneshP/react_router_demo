import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				height: '50px',
				width: '100%',
				backgroundColor: 'teal',
				alignItems: 'center',
				justifyContent: 'space-around'
			}}
		>
			<NavLink to="/users" activeClassName="selected">
				{' '}
				Users{' '}
			</NavLink>
			<NavLink to="/courses" activeClassName="selected">
				{' '}
				Courses{' '}
			</NavLink>
		</nav>
	);
};

export default Navbar;
