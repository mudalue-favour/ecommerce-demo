import React from 'react'

function Newsletter() {
  return (
    <div>
      <div className="container-fluid news-row">
        <div className="row ">
          <div className=" ">
            <h1 className="news-header">Newsletter</h1>
            <p news-para>Get timely updates from your favourite product</p>
            <div class="input-group flex-nowrap">
              <input
                className="news-input"
                type="text"
                placeholder="Input E-mail"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              ></input>
              <span
                class="input-group-text btn btn-secondary"
                id="addon-wrapping"
              >
                @
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
