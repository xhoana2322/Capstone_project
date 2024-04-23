import React from 'react'
import photo15 from '../../../assets/images/img-15.jpg'
import photo16 from '../../../assets/images/img-16.jpg'
import photo17 from '../../../assets/images/img-17.jpg'
import photo18 from '../../../assets/images/img-18.jpg'
import stars from '../../../assets/images/3stars.png'

export default function PeopleComp() {
  return (
    <>
      <div className="hero-people">
        <img src={photo15} alt="staff photo" className='w-100' width={"100%"} style={{height:"100%"}}/>
        <div className="staff-overlay">Our Staff</div>
      </div>

      <div className="space-section-people">
        <p className='bg-light p-0 m-0' style={{height:"150px", position: "relative"}}>
          <img src={stars} alt="3 stars"className="hover-img"/>
        </p>
      </div>

      <div className="description-people-section">
        <div className="row">
          <div className="col-md-6 col-lg-6 section-image-staff p-0 d-none d-md-block d-sm-none">
            <img src={photo17} className='img-people-sx' alt="guy cooking" width={"100%"} style={{height:"70%"}}/>
            <img src={photo18} className='img-people-sx' alt="guy choping food up" width={"100%"} style={{height:"30%"}} />
          </div>
          <div className="col-12 col-md-6 section-description-staff p-0">
            <div className='paragraphs d-flex align-items-center flex-column'>
              <p>In the revered domain of Elysium, where culinary excellence reigns supreme, every member of the staff personifies a relentless dedication to perfection. Guided by the visionary leadership of Chef Samuel Carter Brown, the kitchen brigade operates as a well-oiled machine, harmonizing their talents to craft culinary masterpieces that transcend mere sustenance.</p>
              <p className='mt-4'>Together, as a symphony of talent and expertise, the staff of Elysium embodies the very essence of hospitality. Their commitment to excellence and unwavering dedication to the art of fine dining transform each visit into an unforgettable journey of taste and refinement—a testament to the timeless allure of Elysium and the enduring legacy of its exceptional staff.</p>
            </div>
            <img src={photo16} width={"100%"} style={{height:"60%"}} alt="guy plating up" />
          </div>
        </div>
      </div>
    </>
  )
}
