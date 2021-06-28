import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='inline-block text-purple-800 font-bold no-underline  text-center h-10 py-2 md:h-auto md:py-4'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;