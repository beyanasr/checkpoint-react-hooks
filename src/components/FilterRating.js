import React from 'react'
import ReactStars from "react-rating-stars-component";


function FilterRating({rating}) {
    return (
        <div>
            <ReactStars
    count={10}
    onChange={(newRating) => rating(newRating)}
    size={24}
    activeColor="#ffd700"
  />, 
        </div>
    )
}

export default FilterRating
