import React from 'react'
import { bracketContainer, regionContainer } from './styles.css'

const Bracket = ({ games, teams, data }) => (
  <main className={bracketContainer}>
    { data.map((item, index) => <Region x={item} key={index} />) }
  </main>
)

const Region = ({ x }) => (
  <section className={regionContainer}>
    { x.map((item, index) => <Game {...item} key={index} />) }
  </section>
)


const Team = ({ seed, school, color }) => (
  <section style={{backgroundColor:color}}>
    {`#${seed} ${school}`}
  </section>
)


const Game = ({ away, home }) => (
  <section>
    {`${home.names.full} v. ${away.names.full}`}
  </section>
)

export default Bracket
