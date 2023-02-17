import React from 'react'
import master from '../Asset/images/mastercard.png'
import visa from '../Asset/images/visa.png'
import paypal from '../Asset/images/paypal.png'

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col">
          <a class="navbar-brand" href="#">
            Ebinabo stores
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            asperiores omnis reiciendis provident qui minima quos eos culpa
          </p>
          <div className="footer-icons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-pinterest"></i>
          </div>
        </div>
        <div className="col">
          <h3>Useful links</h3>
          <ul>
            <li>Home</li>
            <li>Man fashion </li>
            <li>Accesories</li>
            <li>Order tracking</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Cart</li>
            <li>Women fashion</li>
            <li>My Accounts</li>
            <li>wishlist</li>
            <li>Terms</li>
          </ul>
        </div>
        <div className="col">
          <i className="fa fa-map-marker"> 622 Dove Path , South manchester</i>
          <i className="fa fa-phone">09077363938</i>
          <i className="fa fa-envelope">contact@ebinabo.fmail</i>
          <div className="payment">
            <img src={master} alt="" srcset="" />
            <img src={visa} alt="" srcset="" className="mx-4" />
            <img src={paypal} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
