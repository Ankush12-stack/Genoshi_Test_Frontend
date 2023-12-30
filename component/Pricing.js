import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="container mx-auto w-100 p-5">
        <h1 className="fs-1 text-center m-5 p-5">lorem ipsum</h1>
        <div className="row d-flex justify-content-around">
          <div class="card col-3 bg-dark bg-opacity-25">
            <div class="card-body text-light">
              <h5 class="card-title text-center">Basic Plan</h5>
              <p class="card-text">
                <ul>
                  <li>$4/month/user</li>
                  <li>Up to 10 graphs</li>
                  <li>Up to 500 chatbot queries</li>
                </ul>
              </p>
              <div className="text-center">
              <button class="btn btn-bluel border-0 text-light p-2 px-3" type="submit"><span className="">Buy Now </span></button>
              </div>
            </div>
          </div>
          <div class="card col-3 bg-dark bg-opacity-25">
            <div class="card-body text-light">
              <h5 class="card-title text-center">Basic Plan</h5>
              <p class="card-text">
                <ul>
                  <li>$8/month/user</li>
                  <li>Up to 50 graphs</li>
                  <li>Up to 1000 chatbot queries</li>
                  <li>Email + live chat support</li>
                </ul>
              </p>
              <div className="text-center">
              <button class="btn btn-bluel border-0 text-light p-2 px-3" type="submit"><span className="">Buy Now </span></button>
              </div>
            </div>
          </div>
          <div class="card col-3 bg-dark bg-opacity-25">
            <div class="card-body text-light">
              <h5 class="card-title text-center">Basic Plan</h5>
              <p class="card-text">
                <ul>
                  <li>Contact for price</li>
                  <li>Unlimited graphs</li>
                  <li>Ability to upload custom PDFs</li>
                  <li>Ability to upload custom PDFs</li>
                </ul>
              </p>
              <div className="text-center">
              <button class="btn btn-bluel border-0 text-light p-2 px-3" type="submit"><span className="">Buy Now </span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
