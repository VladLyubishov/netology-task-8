import React, { Component, useState, useEffect } from "react";
import Cards from './ProjectList'
import Toolbar from "./Toolbar";

export class Portfolio extends Component{

    state = {
        selectedFilter: "All",
    };

    propsToolbar = {
            filters:["All", "Websites", "Flayers", "Business Cards"],
            selected: "All",
            onSelectFilter: (evt) => {
                const buttons = document.querySelectorAll('button')
                buttons.forEach(element => {
                    element.classList.remove('selected')
                });
                evt.target.classList.add('selected')
                this.setState({ selectedFilter: evt.target.innerText })
            }
        }

    render() {
        return (
            <div className="main-content">
                <Toolbar props={this.propsToolbar} />
                <Cards props={this.state.selectedFilter} />
            </div>
        );
    }      
}