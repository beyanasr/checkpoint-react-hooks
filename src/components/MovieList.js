import React from 'react'
import MovieCard from './MovieCard'


function MovieList({movie}) {
	return (
		<div className='listOfMovies'>
		{movie.map(m=><MovieCard movie={m}/>)  }        
		</div>
	)
}

export default MovieList
