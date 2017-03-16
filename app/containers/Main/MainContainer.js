import React, { Component } from 'react'
import { mainContainer, innerContainer } from './styles.css'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = { games: [] }
  }
  render() {
    return (
      <div className={mainContainer}>
        <main className={innerContainer}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default MainContainer
