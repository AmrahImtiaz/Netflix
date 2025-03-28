import React from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {
  const { Id } = useParams(); // Get the movie ID from the URL
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  })

  useEffect(() => {
    const fetchTrailer = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${API_KEY}&language=en-US`;
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Find the first YouTube trailer
        const trailer = data.results?.find(video => 
          video.site === 'YouTube' && video.type === 'Trailer'
        );

        if (trailer) {
          setApiData(trailer);
        } else {
          console.log('No trailer found for this movie');
        }
      } catch (err) {
        console.error('Error fetching trailer:', err);
      }
    };

    if (Id) {
      fetchTrailer();
    }
  }, [Id]);

  return (
    <div className='player'>
      <img src={backarrow} alt="" />
      {apiData.key && (
        <iframe 
          width='90%' 
          height='90%' 
          src={`https://www.youtube.com/embed/${apiData.key}`} 
          title='trailer' 
          allowFullScreen 
        />
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player