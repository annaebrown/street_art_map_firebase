import React from 'react';

export const ArtworkWindow = props => {
	const marker = props.marker;
	return (
		<div className='art_window'>
			<div className='art_image'>
				<img src={marker.artworks[0].img}/>
			</div>
			<div className='art_info'>
				<p>{marker.artworks[0].description}</p>
			</div>
		</div>
	);
};

ArtworkWindow.propTypes = {
	marker: PropTypes.object.isRequired
}
