import React from 'react';
import { Navbar, Glyphicon } from 'react-bootstrap';

export const NavBar = (props) => {
	return (
		<Navbar fixedTop={true} className='nav'>
			<span><Glyphicon glyph="flash"/></span>
			<span><Glyphicon glyph="flash"/></span>
			<span><Glyphicon glyph="flash"/></span>
			    <Navbar.Text className='navbar_text'>
			        Brooklyn Street View
			    </Navbar.Text>
		    <span><Glyphicon glyph="flash" /></span>
		    <span><Glyphicon glyph="flash"/></span>
		    <span><Glyphicon glyph="flash"/></span>
		</Navbar>
	);
};
