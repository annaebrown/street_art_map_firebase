import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Form = props => {
	return (
		<div className='art_form'>
			<form onSubmit={props.onSubmit}>
			  <label>Add your image:</label>
			  <div className='file_button'>
			  	<input name="photo" type='file'/>
			  </div>
		      <label>Name:</label>
		      <input type='name' name='name'/>
		      <label>Description:</label>
		      <input type='description' name='description'/>
		      <label>Artist:</label>
		      <input type='artist' name='artist'/>
		      <Button type='submit'>
		        Submit
		      </Button>
		    </form>
	    </div>
	)
}

export default Form;