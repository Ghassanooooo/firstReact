import React from 'react';
import './Person.css'
 class  person  extends React.Component{
  
render(){
  
    return(
    
    <div className='Person'>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <p onClick={this.props.click}>{this.props.name} will be best develope study by {this.props.st}</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.change} value={this.props.name} />
    </div>
    
   )
   

 }
 
}



export default person;
 
