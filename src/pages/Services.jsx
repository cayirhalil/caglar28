import React from "react";

function Services() {
    return (

        <>
  <section id="ts-service-area" className="ts-service-area pb-0">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">We Are Specialists In</h2>
          <h3 className="section-sub-title">What We Do</h3>
        </div>
      </div>
      {/*/ Title row end */}
      <div className="row">
        <div className="col-lg-4">
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon1.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Home Construction</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 1 end */}
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon2.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Building Remodels</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 2 end */}
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon3.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Interior Design</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 3 end */}
        </div>
        {/* Col end */}
        <div className="col-lg-4 text-center">
          <img
            loading="lazy"
            className="img-fluid"
            src="/assets/images/services/service-center.jpg"
            alt="service-avater-image"
          />
        </div>
        {/* Col end */}
        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon4.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Exterior Design</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 4 end */}
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon5.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Renovation</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 5 end */}
          <div className="ts-service-box d-flex">
            <div className="ts-service-box-img">
              
              <img
                loading="lazy"
                src="/assets/images/icon-image/service-icon6.png"
                alt="service-icon"
              />
            </div>
            <div className="ts-service-box-info">
              <h3 className="service-box-title">
                <a href="https://www.google.com/">Safety Management</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat
              </p>
            </div>
          </div>
          {/* Service 6 end */}
        </div>
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>
  {/* Service end */}
</>

      
    )
}

export default Services