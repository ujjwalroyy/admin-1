import React from 'react'
import { Link } from 'react-router-dom'

import './css/custom.css'
import './css/media.css'

import logo from './image/BT-logo.png'
import correct from './image/correct.png'

const LoginPage = () => {
  return (
         <section className="sign_in p-0">
    <div className="container-fluid">

      <div className="row align-items-center">
        <div className="col-lg-7">
          <div className="inner_content_one">
            <h1>Sign In</h1>
            <h2>Welcome!</h2>

            <form action="" className="form_sec mt-5">
              <div className="row">
                <div className="col-lg-12 mb-lg-4 mb-md-4 mb-3">
                  <label for="exampleInputPassword1" className="form-label form-label-custom">Email</label>
                  <input type="text" className="form-control form-control-custom" id="exampleInputPassword1"
                    placeholder="abc12@gmail.com" />
                </div>
                <div className="col-lg-12">
                  <div className="position-relative password_svg">
                    <label for="exampleInputPassword1" className="form-label form-label-custom">Password</label>
                    <input type="password" className="form-control form-control-custom" id="exampleInputPassword1"
                      placeholder="********" />

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_2056_26496)">
                        <path
                          d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z"
                          fill="#7E7E7E"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2056_26496">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="d-flex align-items-center justify-content-between remember_div mt-30 mb-30">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                    <Link to="forget-password.html" className="link_forget">Forgot Password?</Link>
                  </div>
                </div>
                <div className="col-lg-12 mb-lg-4 mb-md-4 mb-3">
                  <Link to="/" className="btn blue-btn w-100 text-uppercase">Sign In</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 gradient_bg h_100vh">
          <div className="inner_content_two">
            <Link to="/" className="">
              <img src={logo} className="img-fluid" alt="" />
            </Link>
            <div className="line_height_24">
              <h2 className="login-right-heading  mb_16">
                Flexible & Powerful Project Management Tool For BT Team
              </h2>
              <p className="para_18 my-3">
                Scrum and Kanban boards help agile teams turn large complex projects into manageable pieces of work and
                ship faster.
              </p>
              <div className="mt-5">
                <div className="d-flex gap-3 mb-3">
                  <span><img src={correct} alt="" /></span>
                  <p className="para_18">
                    Powerful agile boards
                  </p>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <span><img src={correct} alt="" /></span>
                  <p className="para_18">
                    Reports and insights:
                  </p>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <span><img src={correct} alt="" /></span>
                  <p className="para_18">
                    No training or maintenance needed
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default LoginPage