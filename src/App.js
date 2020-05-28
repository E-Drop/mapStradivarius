import React, { Component } from 'react';
import './App.css';
import MapComponent from './components/MapComponent/MapComponent';
import SearchBar from './components/SearchBar/SearchBar';
class App extends Component {

  render() {
    return (
      <div>
        <SearchBar/>
        <MapComponent/>
      </div>
    );
  }
}

export default App;
