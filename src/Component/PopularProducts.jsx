import React from 'react'
import pic from '../Asset/images/try.png'
import pic1 from '../Asset/images/png1.png'
import pic2 from '../Asset/images/png2.png'
import pic3 from '../Asset/images/png3.png'
import pic4 from '../Asset/images/png4.png'
import pic5 from '../Asset/images/png5.png'
import pic6 from '../Asset/images/png6.png'
import pic7 from '../Asset/images/png7.png'
import pic8 from '../Asset/images/png8.png'
import ProductModal from '../ProductModal'

function PopularProducts() {
  const content = [
    {
      title: 'body section',
      images: pic1,
    },
    {
      title: 'body section',
      images: pic2,
    },
    {
      title: 'body section',
      images: pic3,
    },
    {
      title: 'body section',
      images: pic4,
    },
    {
      title: 'body section',
      images: pic5,
    },
    {
      title: 'jik oko',
      images: pic6,
    },

    {
      title: 'jik oko',
      images: pic7,
    },

    {
      title: 'jik oko',
      images: pic8,
    },
  ]
  return (
    <>
      {content.map((d) => (
        <>
          <div className="col-lg-3 col-md-6 col-sm-12 ">
            <div className="product">
              <div className="circle">
                <img src={d.images} alt="htthjt" className="product-img" />
                <div className="category-icon">
                  <i className="fa fa-shopping-cart d"></i>
                  <i className="fa fa-heart  d"></i>
                  <i className="fa fa-plus d"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      <ProductModal />
    </>
  )
}

export default PopularProducts
