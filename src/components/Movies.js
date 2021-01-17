import React from 'react'
import Movie from './Movie'

// Component for all movies in search results
const Movies = (props) => {
    return(
        <ul>
            {props.movies.map((movie, i) => 
            <Movie key={i} movie = {movie} nominate = {props.nominate} nominees = {props.nominees} />
            )}
        </ul>
    )
}

export default Movies