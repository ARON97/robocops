import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

// define connect() params
const mapStateToProps = state => {
	return {
		// the search field we are returning is going to come from reducers.js
		searchField: state.searchRobots.searchField,
		// robots state
		robots: state.requestRobots.robots,
		// pending state
		isPending: state.requestRobots.isPending,
		// error state
		error: state.requestRobots.error
	}
}

// define connect() params
// dispatch is what triggers an action. The action gets dispatched to the reducer
const mapDispathToProps = (dispatch) => {
	return {
		// search actions
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		// robot request action which returns a function
		onRequestRobots: () => dispatch(requestRobots())
	}
}
class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		// destructure
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
      		return robot.name.toLowerCase().includes(searchField.toLowerCase());
    	})
    	// when the fetch takes too long
		return isPending ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
    				<CardList robots={filteredRobots}/>
    			</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispathToProps)(App);