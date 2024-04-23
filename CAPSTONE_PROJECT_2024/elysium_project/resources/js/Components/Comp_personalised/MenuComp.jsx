import React from 'react'
import photo31 from '../../../assets/images/img-31.jpg'
import photo32 from '../../../assets/images/img-32.jpg'
import photo33 from '../../../assets/images/img-33.jpg'

export default function MenuComp() {
  return (
    <>
         <div className="hero-menu">
            <img src={photo33} alt="kitchen photo" className='w-100 h-100' />
            <div className="menu-overlay">Menu</div>
        </div>

        <div className="menu-section bg-light">
          <div className="menu-5-portate">
            <p className='title-menu mb-3'>countryside and substance</p>
            <p>Tasting menu in 5 dishes <br />An excerpt from the menu with courses representative <br /> of the territory and our philosophy.</p>
            <p className='mt-2'>Russian salad<br />Burnt leek, beurre blanc and lemon <br /> Rice, whey and herbs <br />Deviled quail<br /> Frozen fruit and mascarpone cheese</p>
            <p className='price-menu'>70</p>
          </div>

          <div className="menu-8-portate mt-5">
            <p className='title-menu mb-3'>concept and passion</p>
            <p>Tasting menu <br /> freehand in 8 dishes<br /> A curious and entertaining journey <br /> that winds its way through the countryside, hills <br /> and fresh water</p>
            <p className='mb-4 price-menu'>90</p>
          </div>

          <div className="servizi">
            <p>Bread and covered </p>
            <p className='price-menu'>5</p>
          </div>
        </div>
    </>
  )
}
