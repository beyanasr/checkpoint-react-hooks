import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


function MovieCard({movie}) {
  return (
    <div>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.Poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>{movie.Year}
    </Card.Text>
    <ReactStars
    value={movie.Rate}
    count={10}
    edit={false}
    size={24}
    activeColor="#ffd700"
  />
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard

