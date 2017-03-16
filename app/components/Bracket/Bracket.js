import React from 'react'
import { bracketContainer, regionContainer, gamesList, gameItem } from './styles.css'
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
    <Team seed={seedTop} name={away.names.short} />
    <Team seed={seedBottom} name={home.names.short} />
  </li>
)

export default Bracket



const Team = ({ seed, name, hex }) => (
  <span style={{backgroundColor:colors[name]}}>
    {`${seed} - ${name}`}
  </span>
)
