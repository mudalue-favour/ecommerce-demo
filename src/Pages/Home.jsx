import React from 'react'
import Navbar from '../Component/Navbar'
import Carosel from '../Component/Carosel'
import Button from '../Component/Button'
import Category from '../Component/Category'
import PopularProducts from '../Component/PopularProducts'
import Newsletter from '../Component/Newsletter'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Carosel />
      <Category />
      <div className="container-fluid">
        <div className="row product-row">
          <h1 className="pp">Popular Product</h1>
          <PopularProducts />
        </div>
      </div>
      <Newsletter />
      <Footer />
      {/* <Button size="lg" text="submit" color="danger" background="#000" /> */}
    </div>
  )
}

export default Home
