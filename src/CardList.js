import React from 'react';

import Card from './Card';


const CardList = ({info}) => {
	const cardsArray = info.map((data,i) => {
		const categories = Object.entries(data);
		return (
			<Card 
				key={i} 
				main={categories[0][1].toUpperCase()}
				catOne={categories[1][0].toUpperCase()} 
				nameOne={categories[1][1]} 
				catTwo={categories[2][0].toUpperCase()} 
				nameTwo={categories[2][1]} 
				catThree={categories[3][0].toUpperCase()} 
				nameThree={categories[3][1]} 
			/>
		)
	});
	return (
		<div className='cardListBox' >			
        	{cardsArray}
        </div>
	);
}

export default CardList;

