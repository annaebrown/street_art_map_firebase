import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export const Form = props => {
	return (
		<div className='art_form'>
			<form onSubmit={props.onSubmit}>
			<div className='file_upload'>
			  <label>Add your image:</label>
			  <div className='file_button'>
			  	<input type='file' name='photo'/>
			  </div>
			</div>
		    <label>Description:</label>
		    <input type='description' name='description'/>
		    <Button type='submit'>
		       Submit
		    </Button>
		    </form>
	    </div>
	);
};

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
