import React from 'react';
import { useForm } from '@inertiajs/react';
import logo from '../../../assets/images/logo.png';
import ReservationCreate from '@/Components/ReservationCreate';

export default function MyNavbar() {

  // const [navbar, SetNavbar] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     SetNavbar(true);
  //   } else {
  //     SetNavbar(false);
  //   }
  // }

  const {data, setData, post, reset} =useForm({
    name: '',
    phone: '',
    email: '',
    number_people: '',
    date: '',
    time: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
    post(route('reservation.store'));
  }

  return (
    <>
    {/* <nav className={navbar ? 'navbar active' : 'navbar'}> */}
      <nav className="navbar navbar-dark fixed-top px-4 bg-transparent">
        <div className="navbar-container container-fluid d-flex justify-content-between">

        {/* toggle section */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header d-flex flex-start">
            <button type="button" className="btn-close btn-close-white fs-5 mt-1 me-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center mt-5">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Welcome</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/people">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/journey">Journey</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" style={{paddingBottom:"1.5rem"}}>Contact</a>
              </li>
              {/* <hr className='w-50 d-flex align-items-center justify-content-center' /> */}
              <li>
                <a className="nav-link admin-navbar" href="/dashboard" >Admin</a>
              </li>
            </ul>
          </div>
        </div>


          {/* name restaurant */}
          <a className="navbar-brand" href="#">
            <img src={logo} alt=""
            width={"250px"} 
            className='img-fluid'/>
          </a>

          {/* button reservation */}
          <a href="" type="button" className="btn btn-secondary btn-navbar" data-bs-toggle="modal" data-bs-target="#exampleModal">Reservation</a>
          
        </div>
      </nav>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="p-2 d-flex justify-content-end align-items-end">
              <button type="button" className="btn-close p-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className='text-center title-modal mb-4'>Please fill out the following form to make a reservation at our restaurant.</p>
              
              <ReservationCreate />
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

