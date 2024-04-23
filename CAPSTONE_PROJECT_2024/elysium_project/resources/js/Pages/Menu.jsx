import React from 'react'
import MyNavbar from '../Components/Comp_personalised/MyNavbar'
import MyFooter from '../Components/Comp_personalised/MyFooter'
import MenuComp from '../Components/Comp_personalised/MenuComp'

export default function Menu() {
  return (
    <>
      <MyNavbar/>
      <MenuComp />
      <MyFooter/>
    </>
  )
}
