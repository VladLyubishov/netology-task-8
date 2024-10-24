import Toolbar from "./Toolbar";
import React, { Component, useState, useEffect } from "react";

export class Portfolio extends Component{

    state = {
        filters:["All", "Websites", "Flayers", "Business Cards"],
        selected: "All",
        onSelectFilter: (evt) => {
            const buttons = document.querySelectorAll('button')
            buttons.forEach(element => {
                element.classList.remove('selected')
            });
            evt.target.classList.add('selected')
        }
    }

    render(){
        return(Toolbar(this.state))
    }       
}