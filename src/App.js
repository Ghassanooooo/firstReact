import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    pr:[
      {id:'agh1g', name:"Ghassan",study:"DCI"},
       {id:'agh2g', name:"pilar",study:"DCI"},
       {id:'agh3g', name:'abas',study:'finised'}
    ] ,
    showState:false
  } 

  
  showObj=()=>{
   let showHide= this.state.showState;
   this.setState({showState:!showHide})
  }

  ch=(e,idP)=>{
    const pI=this.state.pr.findIndex(i=>{
      return i.id ===idP
    });
  
    const p={...this.state.pr[pI]};
   // const p=Object.assign({},this.state.pr[pI])
    p.name=e.target.value;

    const pr=[...this.state.pr];
    pr[pI]=p;

    this.setState({pr:pr})

    // this.setState({
    //   pr:[
    //     {id:'agh1g',name:'ghassan',study:"Babylone uni"},
    //      {id:'agh1g',name:e.target.value,study:"Berlin IT"},
    //      {id:'agh1g',name:'abas',study:'finised'}
    //   ],
    //   showState:false
    //  })
    }

    delPerson=(indexP)=>{

   //  const prs=this.state.pr.slice(); 

    const pr=[...this.state.pr];
  
     pr.splice(indexP,1);
     this.setState({pr:pr});
    }

  render() {
   const style={
      border:'4px solid ',
      boxShadow:'2px 2px #eee',
      fontSize:'20px',
    
      width:'200px'
    }
    let pers=null;
    if(this.state.showState){
      pers=(
        <div>
          {this.state.pr.map((p,indexP)=>{
            return  <Person 
            click={()=>this.delPerson(indexP)} 
            change={(e)=>this.ch(e,p.id)}
            key={p.id} 
            name={p.name} 
            st={p.study} 
             />
          })}
        </div>
      )
      style.width='100px'
    }

    const h1={
      color:'#ff0'
       }

       const classes=['hidden']
       if(this.state.pr.length <=2){
        classes.pop();
        classes.push('red') 
       }
       if(this.state.pr.length <=1){
        classes.push('bold') 
       }
    
    return (
      <div className="App">
      <h1 style={h1}>I Love You React</h1>
      <p className="p"><strong>Ghassan said : </strong>React is amazing</p>
      <p className={classes.join(' ')}> warnning you delete some items !!</p>
      <button style={style} onClick={this.showObj}>click</button>
      {pers}
      </div>
    );
  }
}

export default App;
 