import React from 'react'
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'
import AboutComp from '../Components/Comp_personalised/AboutComp'

export default function About() {
  return (
    <>
    <div style={{ overflowX: "clip" }}>
      <MyNavbar />
      <AboutComp />
      <MyFooter />
      </div>
    </>
  )
}
