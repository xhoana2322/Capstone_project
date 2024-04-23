import React from 'react'
import photo2 from '../../../assets/images/img-2.jpg'
import photo7 from '../../../assets/images/img-7.jpg'
import photo11 from '../../../assets/images/img-11.jpg'

export default function Carousel() {
  return (
    <>
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner" style={{height:"800px"}}>
            <div class="carousel-item active">
                <img src={photo2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={photo7} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src={photo11} class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}
