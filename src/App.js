import React, { useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieAdd from './components/MovieAdd';
import FilterName from './components/FilterName';
import FilterRating from './components/FilterRating';

export const App = () => {
  const [movies, setMovies] = useState([    
{
      "Title": "Troy ",
      "Year": "2004",
      "Poster": "https://i.egycdn.com/pic/WmFwZndlY212bXBUbW1lY21EVGJLUGxtanZ3.jpg",
      "Rate":"10"
},   
{
    "Title": "Enola Holmes",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZTE5wRXZOZWNjTkVtcHB2bUVtcGo.jpg",
    "Rate":"6.8"
  },
{
    "Title": "Harry Potter and the Prisoner of Azkaban",
    "Year": "2004",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21tdk5vY21lY2FsbW1tbW1vd3htYg.jpg",
    "Rate":"7.9"
  },
{
    "Title": "Once Upon a Snowman",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZTE5ibWJtam12RWN3TGNtelBtamNrTmo.jpg",
    "Rate":"3"
  },
  {
    "Title": "Where Hands Touch",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URW1FbUVtbW1tdmNFY2xtam1Zc2ptb3R3.jpg",
    "Rate":"5.4"
  },
  {
    "Title": "Extraction",
    "Year": "2020",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZcEVtVHBMY0VjUHZOZ2FtVHJOag.jpg",
    "Rate":"7.2"
  },
  {
    "Title": "Five Feet Apart",
    "Year": "2019",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URXZOcHBibWVjbXZsbUVtam12UHZ3eA.jpg",
    "Rate":"7.2"
  },
  {
    "Title": "Up",
    "Year": "2009",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21Fdk5wVGFjbXZQbG1idk5oTHc.jpg",
    "Rate":"8.2"
  },
  {
    "Title": "Taken 3 ",
    "Year": "2014",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZcFlZYWNtdm1td1RqbW12Y2NOdg.jpg",
    "Rate":"9"
  },
  {
    "Title": "The Holiday",
    "Year": "2006",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZWUVtcGFjeG1ibW12TkVhbG12.jpg",
    "Rate":"7"
  },
  {
    "Title": "I Am Sam",
    "Year": "2001",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21URW1UbW12RWNQYXhtam1Ia05t.jpg",
    "Rate":"8.5"
  },
  {
    "Title": "Belle",
    "Year": "2013",
    "Poster": "https://i.egycdn.com/pic/WmFwZndlY21ZYm1wZWNtanZ3bG1IY21yd0s.jpg",
    "Rate":"7.2"
  }
]);
  const add=(newFilm)=>{
    setMovies(movies=>[...movies,newFilm])
  }
  const inputSearch=(input)=>{
    setMovies(movies.filter(m => m.Title.toLowerCase().includes(input)))
  }
  const rating=(rate)=>{
    setMovies(movies.filter(mo=>mo.Rate>=rate))
  }
  
  return (
    <div className='App'>
      <MovieAdd add={add}/>
      <FilterName inputSearch={inputSearch}/>
      <FilterRating rating={rating}/>
      <MovieList movie={movies}/>
    </div>
  )
}

export default App;