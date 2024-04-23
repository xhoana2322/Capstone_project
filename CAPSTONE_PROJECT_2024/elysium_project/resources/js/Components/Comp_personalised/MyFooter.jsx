import React from 'react'
import logo from '../../../assets/images/logo.png'

export default function MyFooter() {
  return (
    <>
        <div className='footer bg-dark p-4 text-white'>
            <div className="footer-content d-flex flex-column justify-content-center align-items-center">
                <div className="logo-footer">
                    <img src={logo} alt="" 
                    width={"250px"}
                    height={"80px"}
                    />
                </div>
                <div className="socials">
                    <a href="https://www.facebook.com"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="bi bi-instagram mx-3"></i></a>
                    <a href="https://twitter.com"><i className="bi bi-twitter-x"></i></a>
                </div>
                <p>Copyright &copy; 2024</p>
            </div>
        </div>
    </>
  )
}
