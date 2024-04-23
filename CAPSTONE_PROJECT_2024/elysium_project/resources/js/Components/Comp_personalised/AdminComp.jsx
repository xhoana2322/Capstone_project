import React from 'react'

export default function AdminComp() {
  return (
    <>
    <div className="container-admin container-fluid">
      <div className="center" style={{height:"100vh"}}>
        <h1>Login</h1>
        <form className='mx-auto'>
          <div className=" toppete">
            <div className="">
              <div className="input-group admin-input-group">
                <input
                  type="email"
                  className="form-control inputto admin-input"
                  id="exampleInputEmail1"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                />
                <label htmlFor="exampleInputEmail1" className="form-label admin-label">
                  {/* <i className="bi bi-envelope-fill pe-2"></i> */}
                  Email
                </label>
              </div>
            </div>
            <div className="">
              <div className="input-group toppete">
                <div className="input-group admin-input-group">
                  <input
                    type="password"
                    className="form-control inputto admin-input"
                    id="exampleInputEmail1"
                    name="password"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                  />
                  <label htmlFor="exampleInputPassword1" className="form-label admin-label">
                    {/* <i className="bi bi-envelope-fill pe-2"></i> */}
                    Password
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center blocock">
            <button type="submit" className="btn btn-contact btn-admin">
              Send
            </button>
          </div>
          <div className='text-center mt-3'>
            <p>Not a member? <a href="/register">Sign up!</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
