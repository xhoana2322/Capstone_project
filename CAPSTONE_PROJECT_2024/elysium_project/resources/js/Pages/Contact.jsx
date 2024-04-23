import React from 'react'
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'
import ContactComp from '../Components/Comp_personalised/ContactComp'

export default function Contact() {
  return (
    <>
    {/* <div style={{overflowX: "clip", minWidth:"100vh"}}> */}
      <MyNavbar />
      <ContactComp />
      <MyFooter />
    {/* </div> */}
    </>
  )
}
