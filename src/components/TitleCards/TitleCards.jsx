import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([])

  const cardRef = useRef()

  const url = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjRmM2UzN2Y2ZDM1NzI2OThmMTk3ZTA5MDlhYzIzYiIsIm5iZiI6MTc0Mjk5NzQzOS4yNjMsInN1YiI6IjY3ZTQwN2JmYTYzYmNjNDk5N2RjYWE4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NxEGyD38hwbZ_xoZLXxq7iMObCRYyezQdg78kMZlQj4'
  }
};

  const handlewheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY

  }

  useEffect(()=>{
    fetch(url, options)
    .then(res => res.json())
    .then(json => setApiData(json.results))
    .catch(err => console.error(err));
  
    cardRef.current.addEventListener('wheel',handlewheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
    <div className="card-list" ref={cardRef}>
    {apiData.map((card,index)=>{
      return <Link to={`/player/${card.id}`}className="card" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""  />
      <p>{card.original_title}</p>
      </Link>
    })}
    </div>
    </div>
  )
}

export default TitleCards