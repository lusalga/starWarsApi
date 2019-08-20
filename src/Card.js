import React from 'react';
// we need to import React so our code understand the JSX code

const Card = ({ main, catOne, nameOne, catTwo, nameTwo, catThree, nameThree }) => {
	// const { main, catOne, nameOne } = props; destructuring here or like above
	return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<p><strong>{main}</strong></p>
			<p><em>{catOne}</em>: {nameOne}</p>
			<p><em>{catTwo}</em>: {nameTwo}</p>
			<p><em>{catThree}</em>: {nameThree}</p>
		</div>
	)
}


export default Card;

