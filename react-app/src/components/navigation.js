import React, { Component } from 'react';

class Navigation extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log('NAV  : SHOULD Component Update'
    ,newProps.data,
    this.props.data
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
    render(){
      console.log("NAV !!!")
      var lists = [];
      var data = this.props.data
        var i = 0;
        while(i< data.length){
          lists.push(
          <li key={data[i].id}>
            <a 
            href={'/content/'+data[i].id}
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            >{data[i].title}</a></li>)
          i+=1;
        }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      )
    }
  }

  export default Navigation;