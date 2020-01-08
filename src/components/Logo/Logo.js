import React from 'react';
import Tilt from 'react-tilt';
import whos_logo from './whos_logo.png';


const Logo = ({screen}) => {
	let cName = 'ma4 mt0 tc br4';
	let height = 300;
	let width = 550;
	if (screen === 'game') {
		height = 150;
		width = 300;
	}
	return ( 
		<div className = {cName}>
			<Tilt className="Tilt br2 " options={{ max : 55}} >
 			<div className="Tilt-inner pa3"> <img style = {{paddingTop:'5px' ,height: height , width: width}}
 			alt = "logo" src = {whos_logo}/></div>
			</Tilt>
		</div>
	);
};

export default Logo;