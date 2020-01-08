import React from 'react';

const Lang = ({onLangChange}) =>{
	return (
			<div>
				<img src = 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Israel.png'
				alt = 'Hebrew' onClick = {()=> onLangChange('Hebrew')}
				style = {{height:'30px' , width:'50px' ,marginRight : '5px'}}/>
				<img src = 'https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png'
				alt = 'English' onClick = {() => onLangChange('English')}
				style = {{height:'30px' , width:'50px'}}/>
			</div>
		);

}
export default Lang;