import React, { Component } from 'react';
import Navigation from './components/navigation';
import Content from './components/content';
import Subject from './components/subject';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web" />
        <Navigation />
        <Content title="HTML" desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}

export default App;
