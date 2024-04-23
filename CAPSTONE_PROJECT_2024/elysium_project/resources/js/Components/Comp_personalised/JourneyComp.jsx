import React from 'react'
import photo3 from '../../../assets/images/img-3.jpg'
import photo4 from '../../../assets/images/img-4.jpg'
import photo6 from '../../../assets/images/img-6.jpg'
import photo9 from '../../../assets/images/img-9.jpg'
import photo20 from '../../../assets/images/img-20.jpg'
import photo21 from '../../../assets/images/img-21.jpg'
import photo22 from '../../../assets/images/img-22.jpg'
import photo23 from '../../../assets/images/img-23.jpg'
import photo26 from '../../../assets/images/img-26.jpg'
import photo30 from '../../../assets/images/img-30.jpg'

export default function JourneyComp() {
  return (
    <>
        <div className="title-section-journey">
            <p className='bg-light p-0 m-0 text-center d-flex justify-content-center align-items-end pb-4 fs-3' width={"100%"} style={{height:"220px"}}>Our journey</p>
        </div>

        <div className="row">
            <div className="col p-0">
                <div className="image-container" style={{ height: '35%' }}>
                    <img src={photo20} alt="" className="image" />
                    <div className="hover-text">2010</div>
                </div>
                <div className="image-container" style={{ height: '65%' }}>
                    <img src={photo22} alt="" className="image" />
                    <div className="hover-text">2014</div>
                </div>
            </div>
            <div className="col p-0">
                <div className="image-container" style={{ height: '60%' }}>
                    <img src={photo6} alt="" className="image" />
                    <div className="hover-text">2012</div>
                </div>
                <div className="image-container" style={{ height: '40%' }}>
                    <img src={photo9} alt="" className="image" />
                    <div className="hover-text">2016</div>
                </div>
            </div>
        </div>

        <div className="image-2018" style={{ display: 'flex', justifyContent: 'center' }}>
            <p className='bg-light p-0 m-0 text-center journey-paragraph' style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Food has a remarkable power to inspire, nourishing <br />  not just the body, but the soul <br />  with its flavors, stories, and memories.
            </p>
        </div>


        <div className="row">
            <div className="col-6 p-0">
            <div className="image-container" style={{ height: '65%' }}>
                    <img src={photo30} alt="" className="image" />
                    <div className="hover-text">2020</div>
                </div>
                <div className="image-container" style={{ height: '35%' }}>
                    <img src={photo23} alt="" className="image" />
                    <div className="hover-text">2024</div>
                </div>
            </div>
            <div className="col-6 p-0">
                <div className="space-journey">
                    <div className="image-container" style={{ height: '40%' }}>
                        <img src={photo26} alt="" className="image" />
                        <div className="hover-text">2018</div>
                    </div>
                </div>
                <div className="space-journey">
                    <div className="image-container" style={{ height: '60%' }}>
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner" style={{height:"800px"}}>
                                <div class="carousel-item active">
                                    <img src={photo4} alt="" width={"100%"} height={"100%"} />
                                </div>
                                <div class="carousel-item">
                                    <img src={photo21} alt="" width={"100%"} height={"100%"} />
                                </div>
                                <div class="carousel-item">
                                    <img src={photo3} alt="..." width={"100%"} height={"100%"} />
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
                            <div className="hover-text">2022</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}
