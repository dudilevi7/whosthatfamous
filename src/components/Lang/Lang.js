import React from 'react';
import en from './en.png';
import heb from './heb.png';

const Lang = ({onLangChange}) =>{
	return (
			<div>
				<img src = {heb}
				alt = 'Hebrew' onClick = {()=> onLangChange('Hebrew')}
				style = {{height:'30px' , width:'50px' ,marginRight : '5px'}}/>
				<img src = {en}
				alt = 'English' onClick = {() => onLangChange('English')}
				style = {{height:'30px' , width:'50px'}}/>
			</div>
		);

}
export default Lang;