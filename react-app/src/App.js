import React, { Component } from 'react';
import Navigation from './components/navigation';
import Content from './components/content';
import Subject from './components/subject';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperTEXT...'},
        {id:2, title:'CSS', desc:'CSS is for design...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive...'},
        {id:4, title:'WOW', desc:'JavaScript is for interactive...'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title}
        sub={this.state.subject.sub} />
        <Navigation data={this.state.contents} />
        <Content title="HTML" desc="HTML is HyperText Markup Language."/>
      </div>
    );
  }
}

export default App;
