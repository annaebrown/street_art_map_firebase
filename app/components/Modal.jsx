import React from 'react';

export const Modal = props => {
	return (
		<div className='modal'>
			<button id='modal_button' onClick={props.handleClick}>Click here for instructions!</button>
			{
				props.showModal ? 
				<div className='modal_container'>
					<div className='modal_content'>
						<span className='close'>&times;</span>
						<p>Click a marker to view existing artwork, or click the map to add your own sighting!</p>
					</div>
				</div> 
				: null
			}
		</div>
	);
};
