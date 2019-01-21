import React, { Component } from 'react';
import './App';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h2 className='brand'>Github Trending</h2>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
