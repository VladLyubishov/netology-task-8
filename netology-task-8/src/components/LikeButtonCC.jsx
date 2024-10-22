import React, { Component } from 'react'

export default class LikeButtonCC extends Component {
  
    state = {
        likes: 0
    }

    handler = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
    return (
      <button onClick={this.handler}>{`Like: ${this.state.likes}`}</button>
    )
  }
}
