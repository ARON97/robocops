import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {

	constructor() {
		super()
		// declaring state 
		this.state = {
			// this is what changes
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		// change the state so that the searchfield always gets updated
		this.setState({ searchfield: event.target.value })
	}
	
	render() {
		const filteredRobots = robots.filter(robot =>{
      		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    	})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<scroll>
    				<CardList robots={filteredRobots}/>
    			</scroll>
			</div>
		);
	}
}

export default App;