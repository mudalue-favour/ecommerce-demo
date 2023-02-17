import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            Ebinabo stores
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav  me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign-in
                </a>
              </li>
            </ul>

            <form class="d-flex " role="search">
              <input
                class="form-control me-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <Button
                size="lg"
                text="submit"
                color="danger"
                background="#000"
              />
            </form>

            <div className="cart-icon align mx-4">
              <i className="fa fa-shopping-cart shop-cart cart"></i>
              <h1 className="cart-counter mx-2">1</h1>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
