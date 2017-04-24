import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Form = props => {
	return (
		<div className='art_form'>
			<form onSubmit={props.onSubmit}>
			  <label>Image:</label>
			  <div className='file_button'>
			  	<input type='file'/>
			  </div>
		      <label>Name:</label>
		      <input type='name'/>
		      <label>Description:</label>
		      <input type='description'/>
		      <label>Artist:</label>
		      <input type='artist'/>
		      <Button type='submit'>
		        Submit
		      </Button>
		    </form>
	    </div>
	)
}

export default Form;