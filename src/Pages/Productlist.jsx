import React from 'react'
import Navbar from '../Component/Navbar'
import PopularProducts from '../Component/PopularProducts'
import Newsletter from './../Component/Newsletter'
import Footer from './../Component/Footer'

const Productlist = () => {
  return (
    <div className="product-lists">
      <Navbar />
      <div className="header-text">
        <h3>Super deal!!! Free shipping for orders over $500</h3>
      </div>
      <div className="container-fluid ">
        <div className="row ">
          <div className="p-list">
            <div className="first-option">
              <label for="cars">Filter Product:</label>

              <select id="cars">
                <option value="Colour">Colour</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select id="cars">
                <option value="size">size</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="second-option">
              <label for="cars">Sort Products:</label>

              <select id="cars">
                <option value="volvo">Newest</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row product-row">
          <PopularProducts />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Productlist
