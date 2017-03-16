import axios from 'axios'

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'

export const getScores = () => {
  const url = `${corsAnywhere}http://data.ncaa.com/carmen/brackets/championships/basketball-men/d1/2017/data.json`
  return axios.get(url)
    .then(currentScores => currentScores.data)
    .catch(currentScores => currentScores.status)
}

export const getTeams = () => {
  const url = `${corsAnywhere}http://data.ncaa.com/mml/2017/mobile/tournament.json`
  return axios.get(url)
    .then(currentScores => currentScores.data)
    .catch(currentScores => currentScores.status)
}
