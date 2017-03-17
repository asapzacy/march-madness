

export const shortenTeamName = (name) => {
  switch(name) {
    case 'Northern Kentucky':  return 'N. Kentucky'
    case 'St. Mary\'s (Cal.)': return 'St. Mary\'s'
    case 'Miami (Fla.)':       return 'Miami'
    default:                   return name
  }
}
