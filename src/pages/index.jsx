import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div>
			<h2>Welcome to tutorial</h2>
			<Link to="/users">Show Link to Users</Link>
		</div>
	);
};

export default MainPage;
