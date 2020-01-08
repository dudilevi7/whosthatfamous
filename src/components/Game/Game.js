import React , {Component} from 'react';
import {enQuestions} from './questions.js';
import {hebQuestions} from './hebQuestions.js'
import {RadioGroup, Radio} from 'react-radio-group';

class Game extends Component {
		constructor(props) {
			super(props);
			
			this.state = {
				id : 1,
				index : 0,
				selectedValue : 'a',
				count : 0 ,
				mistakes : 0 
		}
	}
	componentDidMount() {
		this.timer = setInterval(()=>{
			this.timeIsOver();
		},this.props.gameTime * 1000);
	}
	componentWillUnmount() {
   	 clearInterval(this.timer);
  }
	handleChange = (value) => {
				this.setState({selectedValue : value});
	}
	onSubmitQuestion = ()=> {
		let questions = enQuestions;
		let correct = questions[this.state.index].correctAnswer;

		if (this.state.selectedValue === correct){ //right
			this.setState({count : ++this.state.count})
		} 
		else  //wrong
		{
		 this.setState({mistakes : ++this.state.mistakes});
		 if (this.state.mistakes === 3) {
		 	alert('Game Over!');
		 	this.props.onScreenChange('end');
		 	let pts = this.state.count * 5 - this.state.mistakes*2;
		 	this.props.onGameOver(pts);
		 }
		}
		let currIndex = this.state.index;
		if (currIndex<questions.length-1){
			this.setState({index : ++currIndex})
		}else {
			alert('Game Over!');
		 	this.props.onScreenChange('end');
		 	let pts = this.state.count * 5 - this.state.mistakes*2;
		 	this.props.onGameOver(pts);
		}
	}
	timeIsOver = () =>{
		 this.setState({mistakes : ++this.state.mistakes});
		 alert('Time is over!');
		 this.props.onScreenChange('end');
		 let pts = this.state.count * 5 - this.state.mistakes*2;
		 this.props.onGameOver(pts);
	}
	render () {
		const { onScreenChange ,lang } = this.props;
		let questions = enQuestions;
		let send = 'S E N D'
		if (lang === 'Hebrew'){
			send = 'שלח';
			questions = hebQuestions;
		}
		
		return (
			<div className = 'bg-white br2 pa3 ma2 bw2 shadow-3'>
				<label
					style = {{fontWeight: 'bold'}}
					className="link tc ph2 pv1 db bg-animate bg-blue white f9 br1">{questions[this.state.index].question}</label><br/>
				<img src = {questions[this.state.index].img} style = {{height : '75%' ,width : '75%'}}/><br/>
				
				<RadioGroup
				        name="question"
				        selectedValue={this.state.selectedValue}
				        onChange={this.handleChange}>
				        <label>
				          <Radio value="a" />{questions[this.state.index].options.a}
				        </label><br/>
				        <label >
				          <Radio value="b" /> {questions[this.state.index].options.b}
				        </label><br/>
				        <label>
				          <Radio value="c" />{questions[this.state.index].options.c}
				        </label><br/>
				         <label>
				          <Radio value="d" />{questions[this.state.index].options.d}
				        </label><br/>
				 </RadioGroup>
				<label
					style = {{fontWeight: 'bold' , width: '20%'}}
					className="link tc ph2 pv1 db bg-animate bg-blue hover-bg-dark-blue white f9 br1"
					onClick = {this.onSubmitQuestion}>{send}</label><br/>
			</div>

		);
	}
}

export default Game;