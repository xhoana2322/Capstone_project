import React from 'react'
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'
import HomePageComp from '../Components/Comp_personalised/HomePageComp' 

export default function Homepage() {
  return (
    <>
      <MyNavbar />
      <HomePageComp />
      <MyFooter />
    </>
  )
}
