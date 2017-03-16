import React, { Component } from 'react'
import { Bracket } from 'components'
import { getScores, getTeams } from 'helpers/api'

class BracketContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      games: [],
      teams: [],
      data: []
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getScores()
      .then((currentScores) => {
        this.setState({
          isLoading: false,
          games: currentScores.games,
        }, () => this.test())
      })
      .catch((error) =>  {
        this.setState({
          isLoading: false
        })
        throw new Error(error)
      })
  }
  test() {
    getTeams()
    .then(teams => this.setState({ teams: teams.tournament.teams.team }))
    const x = this.state.games.map(game => [game.away.names.full.toLowerCase(), game.home.names.full.toLowerCase()])
    this.again()
  }
  again() {
    const ye = this.state.games.reduce((arr, item) => {
      const id = item.bracketPositionId - 200
      if (id >= 0 && id <= 8) {
        arr[0].push(item)
      } else if (id >= 9 && id <= 16) {
        arr[1].push(item)
      } else if (id >= 17 && id <= 24) {
        arr[2].push(item)
      } else if (id >= 25 && id <= 32) {
        arr[3].push(item)
      }
      return arr
    }, [[],[],[],[]])
    this.setState({ data: ye })
  }
  render() {
    return <Bracket {...this.state} />
  }
}

export default BracketContainer
