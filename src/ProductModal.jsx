import React from 'react'

const ProductModal = () => {
  return (
    <>
      <div
        class="modal fade"
        id="modal-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col img-container">
                  <img src="" alt="" srcset="" />
                </div>
                <div className="col info-container">
                  <h3>{}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus, quae. Quam iste neque enim ratione ex, aliquid
                    inventore itaque mollitia!
                  </p>
                  <p>{}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductModal
