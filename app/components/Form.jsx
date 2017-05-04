import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Form = props => {
	return (
		<div className='art_form'>
			<form onSubmit={props.onSubmit}>
			<div className='file_upload'>
			  <label>Add your image:</label>
			  <div className='file_button'>
			  	<input type='file' name='photo'/>
			  </div>
			  <progress id='progress_bar' value='0' max='100'>0%</progress>
			  <div id='status'></div>
			</div>
		    <label>Description:</label>
		    <input type='description' name='description'/>
		    <Button type='submit'>
		       Submit
		    </Button>
		    </form>
	    </div>
	)
};

export default Form;