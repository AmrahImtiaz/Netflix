import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
    <Navbar/>
    <div className="hero">
      <img src={hero_banner} alt="hero_img" className='banner_img'/>
      <div className="hero-caption">
        <img src={herotitle} alt="caption_img" className='caption_img' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis recusandae excepturi praesentium blanditiis impedit.
           Hic, facere necessitatibus laudantium rerum voluptas pariatur! Veniam quasi maiores dolorem numquam eaque. Mollitia, at molestias.</p>
      <div className="hero-btns">
        <button className='btn'><img src={play_icon} alt="play_icon" />Play</button>
        <button className='btn dark-btn' ><img src={info_icon} alt="info_icon" />More Info</button>
      </div>
      <TitleCards></TitleCards>
      </div>
    </div>
    <div className="more-cards">
    <TitleCards></TitleCards>
    <TitleCards></TitleCards>
    <TitleCards></TitleCards>
    <TitleCards></TitleCards>

    </div>
    </div>
  )
}

export default Home