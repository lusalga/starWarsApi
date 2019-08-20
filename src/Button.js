import React from 'react';

const Button = (props) => {
	const arrDataInfo = [
		'People', 
		'Starships', 
		'Films',
		'Planets',
		'Vehicles',
		'Species'
	];
	const buttons = arrDataInfo.map((feature, i) => {
		return (
			<button 
				className='oneButton' 
				key={i} 
				name={feature.toString().toLowerCase()}
				type='Submit'
				onClick={props.onSubmit}
			>	
				{feature}
			</button>
		)
	});

	return (
		<div  className='buttonBox' >
			{buttons}
		</div>
	)
}

export default Button;