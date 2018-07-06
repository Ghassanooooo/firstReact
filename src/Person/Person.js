import React from 'react';
import './Person.css'
 class  person  extends React.Component{
  
render(){
  const time={
    color:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
     }
    return(
    
    <div className='Person' >
    <span onClick={this.props.click} title="you will delete this component">X</span>
    <h2 style={time}>It is {new Date().toLocaleTimeString()}.</h2>
    <p>{this.props.name} will be best develope study by {this.props.st}</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.change} value={this.props.name} />
    </div>
    
   )
   

 }
 
}



export default person;
 
