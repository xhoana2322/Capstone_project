import React from 'react'
import hero from '../../../assets/images/hero-homepage.png'
import star from '../../../assets/images/3stars.png'
import photo34 from '../../../assets/images/img-34.jpg'
import photo35 from '../../../assets/images/img-35.jpg'
import photo36 from '../../../assets/images/img-36.jpg'
import photo37 from '../../../assets/images/img-37.jpg'

export default function HomePageHero() {
  return (
    <>
    <div className="image-hero">
        <img src={hero} alt="hero" className='hero w-100 img-fluid' />
        <div className='hero-content d-flex flex-column'>
            <p className='mb-3'>Welcome to Elysium</p> 
            <img src={star} alt="" className='star'/>
        </div>
    </div>

      <div className="space-section bg-light d-flex justify-content-center align-items-center"  style={{height:"250px"}}>
          <p className='p-0 m-0 text-uppercase'>a loving tribute, a timeless destination</p>
      </div>

      <div className="first-section-homepage row">
        <div className="col-6 img-col-homepage">
          <img src={photo36} alt="" width={"100%"} height={"100%"} className='img-homepage-paragraph' />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <p className='homepage-paragraph p-5 text-center'>Embark on a gastronomic journey of unparalleled elegance at Elysium, a Michelin-starred sanctuary where meticulous attention to detail transforms each plate into a symphony of flavors, celebrating the finest ingredients with artistry and finesse.</p>
        </div>
      </div>

      <div className="space-section bg-light d-flex justify-content-center align-items-center"  style={{height:"250px"}}>
          <p className='p-0 m-0 text-center'>“Our aim is to create an authentic and inclusive environment for all. <br /> We believe in honoring each ingredient, cherishing its unique qualities  <br /> and presenting them in a way that accentuates their natural flavors.”</p>
      </div>
    </>
  )
}
