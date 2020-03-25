import React from 'react';

const Nav = () => {
	return (
		<nav className="navBox">
		  	<ul className="main-nav">
		  		<li><a href="#about">About</a></li>
		  		<li><a href="#product">Products</a></li>
		  		<li><a href="#team">Our Team</a></li>
		  		<li className="push"><a href="#contact">Contact</a></li>
		  	</ul>
		</nav>
	)
}

export default Nav;