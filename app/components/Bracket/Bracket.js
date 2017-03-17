import React from 'react'
import { bracketContainer, regionLeft, regionRight, gamesList, gameItem,
  teamContainer, teamLogo, teamName, teamSeed, bullet, infoContainer,
  logoContainer } from './styles.css'
import { colors } from 'helpers/tournament'

console.log(colors)

const Bracket = ({ games, teams, data, round3 }) => (
  <main className={bracketContainer}>
    { data.map((item, index) => <Region x={item} round3={round3} side={index <= 1 ? 'left' : 'right'} key={index} />) }
  </main>
)

const Region = ({ x, teams, side, round3 }) => (
  <section className={side === 'left' ? regionLeft : regionRight}>
    { x.map((item, index) => <Round x={item} key={index} teams={teams} />) }
  </section>
)

const Round = ({ x, teams }) => (
  <ul className={gamesList}>
    { x.sort((a, b) => a.bracketPositionId - b.bracketPositionId).map((item, index) => <Game {...item} teams={teams} key={index} />) }
  </ul>
)

const Game = ({ away, home, seedBottom, seedTop }) => (
  <li className={gameItem}>
    {
      away.isTop === 'T'
        ? <Team seed={seedTop} name={away.names.short} seo={away.names.seo} />
        : home.isTop === 'T'
          ? <Team seed={seedTop} name={home.names.short} seo={home.names.seo} />
          : null
    }
    {
      away.isTop === 'F'
        ? <Team seed={seedBottom} name={away.names.short} seo={away.names.seo} />
        : home.isTop === 'F'
          ? <Team seed={seedBottom} name={home.names.short} seo={home.names.seo} />
          : null
    }
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
      <div className={logoContainer}>
        <span className={teamLogo} style={img}></span>
      </div>
      <div className={infoContainer}>
        <span className={teamSeed}>{seed}</span>
        <span className={bullet}>{'•'}</span>
        <span className={teamName}>{name}</span>
      </div>
    </section>
  )
}
