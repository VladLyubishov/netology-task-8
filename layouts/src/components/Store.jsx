import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import React, { Component } from 'react';
import ListView from './ListView';
export default class Store extends Component{

  constructor(props){
    super(props)
    this.products = props.props
  }

  state = {
    selectedFilter: "view_list"
  }

  onSwitch = () => {
    this.state.selectedFilter === "view_list" ? this.setState({selectedFilter: "view_module"}) : this.setState({selectedFilter: "view_list"})
}
  render() {
      return (
        <div>
          <IconSwitch icon={this.state.selectedFilter} onSwitch={this.onSwitch}/>
          {this.state.icon === "view_module" ? <CardsView cards={this.products}/> : <ListView items={this.products}/>}
        </div>  
      );
  }
}