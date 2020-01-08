import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 45 , label: '45' },
  { value: 60, label: '60' },
  { value: 90 ,label: '90' }
];

const StartGame = ({onScreenChange , lang ,setGameTime}) => {
		let play = '/// P L A Y'
		let p = "Do you think you're have an huge knowledge? \n"+ 
					"We built an amazing test for you.\n"+
					"We promise that isn't gonna an easy way to solve it,\n"+
					"but ... Do your best and ...\n";
		let getS = "Let's Start!"
		let selectGameTime = 'Select game time in seconds';
		
		
		if (lang === 'Hebrew'){
			play = " שחק ///";
			p = "אתם חושבים שיש לכם ידע עצום במפורסמים ? \n"
			+ "בנינו מבחן אדיר בשבילכם \n"
			+"אנחנו מבטיחים שזה לא יהיה קל לפתור את זה \n"+
			"...אבל תעשה/י את המקסימום ו\n"
			getS = "!יאללה בואו נתחיל";
			selectGameTime = 'בחר זמן משחק בשניות'

		}
	return (
		<div className = 'bg-white dib br2 pa3 ma2 grow bw2 shadow-3'>
				<p 
				style = {{fontSize : 17 }}>
					{p}
				</p><div style = {{fontSize:37}}>
					{getS}
					 </div>
			<Select id = 'sel' onChange={
				(value)=>{
					let selectedOption = value;
					document.getElementById('sel').value = selectedOption;
					setGameTime(selectedOption.value);
				}
			}
				options={options} placeholder = {selectGameTime}/>
			<div style = {{ marginTop: 40}}>
				<a 
				style = {{fontWeight: 'bold',width: '25%'}}
				className="link tc ph2 pv1 db bg-animate bg-blue hover-bg-dark-blue white f9 br1" 
				href="#"
				onClick = {()=> 
				onScreenChange('game')}>{play}</a>
			</div> 
		</div>
	);
}
export default StartGame;