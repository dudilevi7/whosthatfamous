import React , {Component} from 'react';
import Logo from './components/Logo/Logo';
import StartGame from './components/StartGame/StartGame';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import Lang from './components/Lang/Lang';
import './App.css';

class App extends Component {
		constructor(){
			super();
			this.state = {
				screen : 'start',
				pts : 0 ,
				lang : 'Hebrew',
				gameTime : 90
			}
		}
		onScreenChange = (newScreen) => {
				this.setState({
					screen: newScreen
				});
		}
		onGameOver = (userPts) => {
				this.setState({
					pts : userPts
				})
		}
		onLangChange = (newLang) => {
			this.setState({
				lang : newLang
			});
		}
		setGameTime = (time) => {
			this.setState({
				gameTime : time
			})
		}
	  	render(){
		    return (
		      <div className="App">
		      { this.state.screen === 'game' 
		      	?
			      	(	<div>
			        		<Logo screen = {this.state.screen}/> 
			        		<Lang onLangChange = {this.onLangChange}/>
			        		<Game onGameOver = {this.onGameOver} 
				        		onScreenChange = {this.onScreenChange} 
				        		lang = {this.state.lang} gameTime = {this.state.gameTime}/>
			        	</div>
			        )
		        : (
		        	this.state.screen === 'start' ?
		        	(
			        	<div>
				        	 <Logo screen = {this.state.screen}/> 
				        	 <Lang onLangChange = {this.onLangChange}/>
				       		 <StartGame onScreenChange = {this.onScreenChange} lang = {this.state.lang} setGameTime = {this.setGameTime}/>
			       		 </div>
			       	)
		        	: 
		        		(
		        			<div>
					        	 <Logo screen = {this.state.screen}/> 
					        	 <Lang onLangChange = {this.onLangChange}/>
					       		 <Result onScreenChange = {this.onScreenChange} pts = {this.state.pts} lang = {this.state.lang}/>
		       		 		</div>
		        		)

		         )
		    }
		      </div>
		    );
	    }
}

export default App;
