import React, { useState } from 'react';
import photo40 from '../../../assets/images/img-40.jpg'
import { useForm } from '@inertiajs/react';

export default function ContactComp() {

  const {data, setData, post } =useForm({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setData(name, value);
};

  const onSubmit = (e) => {
    e.preventDefault();
    post(route('contact.send'));
  }

  return (
    <>
    <div className="bg-light">
      <div className="space-section-contact">
        {/* <img src={photo40} alt="" width={"100%"} height={"100%"} /> */}
        <p className='ms-5 mb-5 d-flex align-items-end fs-1 title-contact-page' style={{height:"200px", width:"100%"}}>Contact us</p>
      </div>
      <div>
          <div className="contact-info d-flex align-items-center justify-content-around" width={"100%"}>
              <p>+572-938-1047</p>
              <p>info@elysiumrestaurant.com</p>
              <p>120 Lough Atalia Rd, Galway County, Ireland</p>
          </div>
          <div className=" p-0" width={"100%"}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2385.7047400884344!2d-9.042178822958304!3d53.27690977991626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b96e818ae04eb%3A0x21ae907d8e929601!2s40%20Lough%20Atalia%20Rd%2C%20Galway%2C%20Irlanda!5e0!3m2!1sit!2sit!4v1712830246438!5m2!1sit!2sit" 
                width="100%" 
                height="350" 
                style={{border: "0;"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
      </div>

      <div className="contact-form bg-light">
        <p className='title-contact-form text-center fs-2 mb-3'>Get in touch</p>
        <form className='w-75 mx-auto' onSubmit={onSubmit}>
          <div className="row toppete">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control inputto"
                  id="exampleInputName1"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="exampleInputName1" className="form-label">
                  <i className="bi bi-person-fill pe-2"></i>
                  Name and surname
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 res">
              <div className="input-group toppete">
                <input
                  type="email"
                  className="form-control inputto"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  <i className="bi bi-envelope-fill pe-2"></i>
                  Email
                </label>
              </div>
            </div>
          </div>
          <div className="input-group toppete">
            <textarea
              className="form-control form-textarea"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              value={data.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              <i className="bi bi-chat-left-text-fill pe-2"></i>
              Message
            </label>
          </div>
          <div className="d-flex justify-content-between align-items-center blocock">
            <button type="submit" className="btn btn-contact w-25">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
