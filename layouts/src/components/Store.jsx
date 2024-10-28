import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import React, { Component } from 'react';
import ListView from './ListView';
export default class Store extends Component{

  
  constructor(props){
    super(props)
    this.products = props.products
  }

  state = {
    selectedFilter: "view_list"
  }

  onSwitch = () => {
    this.setState( this.state.selectedFilter === "view_list" ? 
      {selectedFilter: "view_module"} : 
      {selectedFilter: "view_list"})  
  }

  render() {
    return (
      <div>
        <div className='buttonSwitchArea'>
          <IconSwitch icon={this.state.selectedFilter} onSwitch={this.onSwitch}/>     
        </div>
        {this.state.selectedFilter === "view_module" ? 
          <div className="mainCard">  <CardsView cards={this.products}/> </div> : 
          <div className="mainList"> <ListView items={this.products}/> </div>
        }
        </div>  
    );
  }
}