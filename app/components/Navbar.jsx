import React from 'react';
import { Navbar, Glyphicon } from 'react-bootstrap';

const NavBar = (props) => (
	<Navbar fixedTop={true} className='nav'>
			<span><Glyphicon glyph="flash"/></span>
			<span><Glyphicon glyph="flash"/></span>
			<span><Glyphicon glyph="flash"/></span>
			    <Navbar.Text className='navbar_text'>
			        Brooklyn Street Art Map
			    </Navbar.Text>
		    <span><Glyphicon glyph="flash" /></span>
		    <span><Glyphicon glyph="flash"/></span>
		    <span><Glyphicon glyph="flash"/></span>
	</Navbar>
);

export default NavBar;