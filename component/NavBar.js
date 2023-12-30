import React from 'react'
import {FaArrowRight} from  'react-icons/fa'
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-tale px-5">
        <div class="container-fluid">
          <a class="navbar-brand text-light fs-2 fw-bold" href="#">GRAFF</a>
          <div class=" n avbar-collapse text-light" id="navbarText">
            <div>
              <span className="me-4">Sign In</span>
              <button class="btn btn-bluel border-0 text-light p-2 px-3" type="submit"><span className="">Sign Up <FaArrowRight /></span></button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
