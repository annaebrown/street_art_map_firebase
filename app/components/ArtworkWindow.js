import React from 'react';

const ArtworkWindow = (props) => {
	const marker = props.marker;
	return (
		<div className='art_window'>
			<div className='art_image'>
				<img src={marker.artworks[0].img}/>
			</div>
			<div className='art_info'>
				<p>{`Description: ${marker.artworks[0].description}`}</p>
			</div>
		</div>
	)
};

export default ArtworkWindow;