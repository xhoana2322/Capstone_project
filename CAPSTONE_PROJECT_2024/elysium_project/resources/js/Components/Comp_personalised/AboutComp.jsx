import React from 'react';
import photo1 from '../../../assets/images/img-1.jpg'
import photo10 from '../../../assets/images/img-10.jpg'
import photo13 from '../../../assets/images/img-13.jpg'
import photo14 from '../../../assets/images/img-14.jpg'
import photo39 from '../../../assets/images/img-39.jpg'
import Carousel from '../Comp_personalised/Carousel';

export default function AboutComp() {
  return (
    <>
    <div className="first-section-about row">
        <div className="section-image-sx col-md-6 col-sm-12 p-0" style={{height:"100%"}}>
            <img src={photo1} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className="section-title-images-dx col-md-6 col-sm-12 p-0" style={{height:"50%"}}>
            <p className='title-about m-0 text-center d-flex justify-content-center align-items-end' style={{height:"180px"}}>About</p>
            <img src={photo39} alt=""  width={"100%"} height={"400px"} style={{height:"710px"}} />
            {/* <img src={photo10} alt="" width={"100%"}/> */}
        </div>
    </div>

    <div className="space-section-about">
        <p className='bg-light p-0 m-0' style={{height:"150px"}}></p>
    </div>

    <div className="second-section-about d-flex">
        <div className="description d-flex align-items-center col-lg-6 col-md-6 col-sm-12">
            <div className='paragraphs about-paragraph'> 
                <p>At Elysium, gastronomy becomes an art form, with each course a culinary masterpiece that tantalizes the senses and ignites the imagination. From delicate amuse-bouches to decadent desserts, every dish is a celebration of creativity and innovation, inviting guests on an unforgettable gastronomic journey.</p>
                <p className='mt-4'>Under the visionary helm of Chef Sam Carter Brown, this sanctuary of taste offers an unparalleled gastronomic voyage. With an ambiance steeped in elegance and hospitality, guests are invited to indulge in a symphony of flavors meticulously curated from the finest seasonal ingredients.</p>
            </div>
        </div>
        <div className="image-description col-lg-6 col-md-6 col-sm-12 p-0">
            <img src={photo14} alt="" width={"50%"} />
        </div>
    </div>


    <div className="carousel">
        <Carousel />
    </div>
    </>
  )
}
