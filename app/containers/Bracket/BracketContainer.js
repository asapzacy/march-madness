import React, { Component } from 'react'
import { Bracket } from 'components'
import { getScores, getTeams } from 'helpers/api'

class BracketContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      games: [],
      data: [],
      round3: []
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
        }, () => this.again())
      })
      .catch((error) =>  {
        this.setState({
          isLoading: false
        })
        throw new Error(error)
      })
  }
  // test() {
  //   getTeams()
  //   .then(teams => this.setState({ teams: teams.tournament.teams.team }))
  //   const x = this.state.games.map(game => [game.away.names.full.toLowerCase(), game.home.names.full.toLowerCase()])
  //   this.again()
  // }
  again() {
    const ye = this.state.games.reduce((arr, item) => {
      console.log(item.bracketPositionId)
      const id = item.bracketPositionId % 100
      if (item.round === '2') {
        if (id >= 1 && id <= 8) {
          arr[0][0].push(item)
        } else if (id >= 9 && id <= 16) {
          arr[1][0].push(item)
        } else if (id >= 17 && id <= 24) {
          arr[2][0].push(item)
        } else if (id >= 25 && id <= 32) {
          arr[3][0].push(item)
        }
      } else if (item.round === '3') {
        if (id >= 1 && id <= 4) {
          arr[0][1].push(item)
        } else if (id >= 5 && id <= 8) {
          arr[1][1].push(item)
        } else if (id >= 9 && id <= 12) {
          arr[2][1].push(item)
        } else if (id >= 13 && id <= 16) {
          arr[3][1].push(item)
        }
      }
      else if (item.round === '4') {
        if (id >= 1 && id <= 2) {
          arr[0][2].push(item)
        } else if (id >= 3 && id <= 4) {
          arr[1][2].push(item)
        } else if (id >= 5 && id <= 6) {
          arr[2][2].push(item)
        } else if (id >= 7 && id <= 8) {
          arr[3][2].push(item)
        }
      }
      else if (item.round === '5') {
        if (id === 1) {
          arr[0][3].push(item)
        } else if (id === 2) {
          arr[1][3].push(item)
        } else if (id === 3) {
          arr[2][3].push(item)
        } else if (id === 4) {
          arr[3][3].push(item)
        }
      }
      return arr
    }, [
        [
          [],[],[],[]
        ],
        [
          [],[],[],[]
        ],
        [
          [],[],[],[]
        ],
        [
          [],[],[],[]
        ]
      ]
    )
    this.setState({ data: ye })
    // const round3 = this.state.games.filter(item => item.round === '3')
    //   .reduce((arr, item) => {
    //     const id = item.bracketPositionId - 300
    //     if (id >= 0 && id <= 4) {
    //       arr[0].push(item)
    //     } else if (id >= 5 && id <= 8) {
    //       arr[1].push(item)
    //     } else if (id >= 9 && id <= 12) {
    //       arr[2].push(item)
    //     } else if (id >= 13 && id <= 16) {
    //       arr[3].push(item)
    //     }
    //     return arr
    //   }, [[],[],[],[]])
    // this.setState({ round3 })
  }
  render() {
    return <Bracket {...this.state} />
  }
}

export default BracketContainer
