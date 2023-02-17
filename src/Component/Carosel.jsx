import Button from './Button'
import React from 'react'
import goat from '../Asset/images/item2.png'
import summer from '../Asset/images/pngegg.png'
import item3 from '../Asset/images/item3.png'
function Carosel() {
  return (
    <div className="carousel">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row c-row gx-1">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="img-container">
                  <img
                    src={summer}
                    alt=""
                    srcset=""
                    className="caro-img d-block"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-part pt-5 d-block">
                <h1>summer sales</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis nesciunt quisquam provident corporis, aliquid
                </p>
                <Button
                  size="lg"
                  text="Check out"
                  color="danger"
                  background="#000"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row  c-row gx-1">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="img-container">
                  <img
                    src={goat}
                    alt=""
                    srcset=""
                    className="caro-img d-block"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-part pt-5 d-block">
                <h1>Back to School Wears</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis nesciunt quisquam provident corporis, aliquid
                  harum ab culpa alias voluptatum voluptas.
                </p>
                <Button
                  size="lg"
                  text="Check out"
                  color="danger"
                  background="#000"
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row c-row gx-1">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="img-container d-flex justify-content-center">
                  <div className="text-center">
                    <img
                      src={item3}
                      alt=""
                      srcset=""
                      className="caro-img d-block"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-start pt-5 d-block">
                <h1 className="text-start">
                  fashionistar <span className=""></span>
                </h1>
                <p className="text-start lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis nesciunt quisquam provident corporis, aliquid
                  harum ab culpa alias voluptatum voluptas.
                </p>
                <Button
                  size="lg"
                  text="Check out"
                  color="danger"
                  background="#000"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carosel
