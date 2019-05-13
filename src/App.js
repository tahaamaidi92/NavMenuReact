import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      showMenu: false,
      class:'on'
    }
  }
  showMenu=(event)=> {
    event.preventDefault();
    if(this.state.class==='on'){
      this.setState({
        showMenu: true,
        class:'off'
      });
    }
    if(this.state.class==='off'){
      this.setState({
        class:'on'
      })
    }
   
  }
  
  render() { 
    return ( 
       <div className="div1">
         <ul className="ul-menu">
           <li className="li1">Home</li>
           <li className="li2" onClick={this.showMenu}>Services 
             <div className={ this.state.class }>
               <a href="#"> For entrepreneurs</a>
               <a href="#"> For Students</a>
               <a href="#"> For hobbyists</a>
             </div> 
           
           </li>
           <li className="li3">Contact</li>
         </ul>
       </div>
     );
  }
}
 
export default App ;
