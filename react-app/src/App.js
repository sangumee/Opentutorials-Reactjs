import React, { Component } from 'react';
import Navigation from './components/navigation';
import ReadContent from './components/readContent';
import Subject from './components/subject';
import Control from './components/control';
import CreateContent from './components/createContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=4;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!!'},
      welcome:{title:'Welcome', desc:'Hello Home Page!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperTEXT...'},
        {id:2, title:'CSS', desc:'CSS is for design...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive...'},
        {id:4, title:'WOW', desc:'JavaScript is for interactive...'}
      ]
    }
  }
  render(){
    var _title, _desc, _article = null;
    if(this.state.mode ==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}/>
    } else if (this.state.mode==='read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data= this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i+=1;
      }
      _article = <ReadContent title={_title} desc={_desc}/>
    } else if (this.state.mode ==='create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        // Add content to this.state.contents
        this.max_content_id = this.max_content_id+1;

        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        var newContents = Array.from(this.state.contents);
        newContents.push({
          id:this.max_content_id,
          title:_title,
          desc:_desc
        });
        
        this.setState({
          contents : newContents
        });
      }.bind(this)}/>
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}
        />
        <Navigation onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
        })
        }.bind(this)} 
        data={this.state.contents}
        />
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}/>
        {_article}
      </div>
    );
  }
}

export default App;
