import React from 'react'
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'
import JourneyComp from '../Components/Comp_personalised/JourneyComp'

export default function Journey() {
  return (
    <>
      <div style={{ overflowX: "clip" }}>
        <MyNavbar />
        <JourneyComp />
        <MyFooter />
      </div>
    </>
  )
}
