import React from 'react';

const Result = ({onScreenChange , pts , lang}) => {
	let userTitle = "Get improved friend...";
	let hebUserTitle = "...חבר אתה חייב להשתפר";
	let home = "/// H O M E ";
	let shareVia = "Share via Whatsapp";
	if (pts<0) pts = 0;
	if (pts>10 && pts<17) {
		userTitle = "Good job brooo";
		hebUserTitle = " :) הופה , נתתם עבודה"
	}
	if (pts>=17) {
	userTitle = "You are a Prooo";
	hebUserTitle = " !!!תאמינו לי אתם מקצוענים";
	}
	if (lang === 'Hebrew') {
		userTitle = hebUserTitle;
		home = "לדף הבית ///";
		shareVia = 'שתף בוואצאפ'
	}
	let whatsappUrl = "https://api.whatsapp.com/send?text=Who's That Famous : "+ userTitle + ' '+pts;
	return (
		<div>
			<div className = 'bg-white dib br2 pa3 ma2 grow bw2'>
				<h1> {userTitle} </h1>
				<h2 className ='bg-blue hover-bg-black dib br2 pa3 ma1 grow bw2' style = {{fontSize : 39 , color : 'white'}}>
					{pts} 
				</h2>
				<div>
					{shareVia} <br/>
					<a href={whatsappUrl} data-action="share/whatsapp/share">
					<img src = 'https://i.pinimg.com/originals/11/8a/e3/118ae31cfcff8080d834e3e4e646d8e7.png' 
					style = {{height:'15%' ,width : '15%'}}/></a> 
				</div>
				<div style = {{ marginTop: 20}}>
				<a 
					style = {{fontWeight: 'bold',width: '100%'}}
					className="link tc ph2 pv1 db bg-animate bg-blue hover-bg-black white f9 br1" 
					onClick = {()=> 
					onScreenChange('start')}>{home}</a>

				</div> 
			</div>
		</div>
	);
}
export default Result;