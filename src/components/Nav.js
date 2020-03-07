import React from 'react';

const Nav = () => {
	return (
		<nav className="navBox">
		  	<ul class="main-nav">
		  		<li><a href="#about">About</a></li>
		  		<li><a href="#product">Products</a></li>
		  		<li><a href="#team">Our Team</a></li>
		  		<li class="push"><a href="#contact">Contact</a></li>
		  	</ul>
		</nav>
	)
}

export default Nav;