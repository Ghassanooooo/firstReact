import React from 'react';

export default class Person extends React.Component{
    render(){
        return(
          <p>will be best developer#{this.rnd(50)}</p>
        );
    };
    rnd(x=10){
     return Math.ceil(Math.random()*x)
    }
}

