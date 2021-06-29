import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ title }) => {
	return (
		<nav className="nav-wrapper light-blue darken-3">
			<a href="#!" className="brand-logo center">
				{title}
			</a>
		</nav>
	);
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NavBar;
