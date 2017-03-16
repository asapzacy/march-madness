import React from 'react'
import { bracketContainer, regionContainer, gamesList, gameItem,
  teamContainer, teamLogo, teamName } from './styles.css'
import { colors } from 'helpers/tournament'

console.log(colors)

const Bracket = ({ games, teams, data }) => (
  <main className={bracketContainer}>
    { data.map((item, index) => <Region x={item} key={index} />) }
  </main>
)

const Region = ({ x, teams }) => (
  <section className={regionContainer}>
    <Round x={x} teams={teams} />
  </section>
)

const Round = ({ x, teams }) => (
  <ul className={gamesList}>
    { x.sort((a, b) => a.bracketPositionId - b.bracketPositionId).map((item, index) => <Game {...item} teams={teams} key={index} />) }
  </ul>
)

const Game = ({ away, home, seedBottom, seedTop }) => (
  <li className={gameItem}>
    <Team seed={seedBottom} name={away.names.short} seo={away.names.seo} />
    <Team seed={seedTop} name={home.names.short} seo={home.names.seo} />
  </li>
)

export default Bracket

const CORS = 'https://cors-anywhere.herokuapp.com/'
const bgImg = (team) => `url('http://i.turner.ncaa.com/sites/default/files/cssu/mml/2017/teams/bgd/${team}.png')`
const imgEl = (team) => `http://i.turner.ncaa.com/sites/default/files/cssu/mml/2017/teams/bgd/${team}.png`

const Team = ({ seed, name, seo }) => {
  const img = { background: `${bgImg(seo)} 50% 50% / contain no-repeat` }
  // const img = { background: `${colors[name]} ${bgImg(seo)} 0.25em 50% / contain no-repeat` }
  const bg = { backgroundColor: colors[name] }
  return (
    <section className={teamContainer} style={bg}>
      <span className={teamLogo} style={img}></span>
      <span className={teamName}>{`${seed} - ${name}`}</span>
    </section>
  )
}
