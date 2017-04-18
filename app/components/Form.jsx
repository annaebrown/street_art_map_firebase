import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Form = props => {
	return (
		<form>
	      <label>Name:</label>
	      <input type='name'/>
	      <label>Description:</label>
	      <input type='description'/>
	      <label>Artist:</label>
	      <input type='artist'/>
	      <Button type="submit">
	        Submit
	      </Button>
	    </form>
	)
}

export default Form;