import React, { useEffect } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useRef } from 'react'

const TitleCards = () => {

  const cardRef = useRef()

  const handlewheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY

  }

  useEffect(()=>{
    cardRef.current.addEventListener('wheel',handlewheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
    <div className="card-list" ref={cardRef}>
    {cards_data.map((card,index)=>{
      return <div className="card" key={index}>
      <img src={card.image} alt=""  />
      <p>{card.name}</p>
      </div>
    })}
    </div>
    </div>
  )
}

export default TitleCards