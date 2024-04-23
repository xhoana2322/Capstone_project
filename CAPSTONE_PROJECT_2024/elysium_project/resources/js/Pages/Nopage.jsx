import React from 'react'
import { Link } from 'react-router-dom';
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'

export default function Nopage() {
  return (
    <>
    <MyNavbar />
      <div className='PageDiv d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
          <p>Something went wrong, <Link to="/">please go back </Link></p>
      </div>
    <MyFooter />
    </>
  )
}
