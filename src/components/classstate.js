import React from 'react'

export default class Classstate extends React.Component
{
    constructor(){
    super();
    this.state={
        fname:"Uki",
    };
}
handleChange(){
    this.setState({
        fname:'Uki.life'
    });
}
render(){
  return (
    <div>
      {this.state.fname} is official website 
    <button onclick={this.handleChange.bind(this)}>Click</button>
    </div>

  );
}
}

