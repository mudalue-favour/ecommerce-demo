import React from 'react'
import shirt from '../Asset/images/shirt.jpg'
import jacket from '../Asset/images/jacket.jpg'
import lounge from '../Asset/images/lounge.jpg'
import Button from './Button'
import { Link } from 'react-router-dom'
function Category() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 category-row">
            <img src={lounge} alt="" srcset="" className="category-image" />
            <div className="category-info">
              <div className="title">
                <h2>Loungewear</h2>
              </div>
              <Link to="product-list">
                <Button
                  size="lg"
                  text="Shop now"
                  color="danger"
                  background="#000"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 category-row">
            <img src={jacket} alt="" srcset="" className="category-image" />
            <div className="category-info">
              <div className="title">
                <h2>Light Jacket</h2>
              </div>
              <Link to="/product-list">
                <Button
                  size="lg"
                  text="Shop now"
                  color="danger"
                  background="#000"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 category-row">
            <img src={shirt} alt="" srcset="" className="category-image" />
            <div className="category-info">
              <div className="title">
                <h2>Shirt Styles</h2>
              </div>
              <Link to="/product-list">
                <Button
                  size="lg"
                  text="Shop now"
                  color="danger"
                  background="#000"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
