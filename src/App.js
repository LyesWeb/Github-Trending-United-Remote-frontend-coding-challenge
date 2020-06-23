import React from 'react';
import './App';
import List from './components/List';

const App = () => {
	return (
		<div className="App">
			<div className='container'>
				<h2 className='brand'>Github Trending</h2>
			</div>
			<List />
			<footer className='footer'>
				<p>This is my solution of the <a href='https://github.com/hiddenfounders/frontend-coding-challenge' target='_blank' rel='noopener noreferrer'>United remote web coding challenge</a>, Made with reactjs and github Api. </p>
			</footer>
		</div>
	);
}

export default App;
