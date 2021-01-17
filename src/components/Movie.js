import React from 'react'
// Component for a single movie in search results
const Movie = ({movie, nominate, nominees}) => {
  // A function to check for whether this movie has already been nominated
  const isDisabled = (movie) => {
    let nominee = null
    if (nominees.length > 0)
      nominee = nominees.find(nominee => nominee.imdbID === movie.imdbID)
    return (nominee != null || nominees.length === 5)
  }

  return (
    <div>
      <div> {movie.Title} </div> 
      <div> {movie.Year}</div>
      <button disabled = {isDisabled(movie)} onClick ={() => nominate(movie)}> Add to Nomination </button>
    </div>
  )
}

export default Movie