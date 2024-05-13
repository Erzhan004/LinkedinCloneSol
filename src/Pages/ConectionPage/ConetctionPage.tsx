import React from 'react'
import hero from '../../Components/Assets/hero_img.png'
import { Content } from '../../Components/ConnectBtn';
import './ConnectionPage.css'

export const ConetctionPage = () => {
  return (
    <div className='Conection'>        
        <p>Expand your professional horizon with <span>CareerLink</span></p>
        <img src={hero} alt="" className="hero-img" />
        <Content/>
    </div>
  )
}
