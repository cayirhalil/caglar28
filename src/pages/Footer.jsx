import React from "react";

function Footer() {
    return (
        <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 className="widget-title">About Us</h3>
                <h1 style={{ color: "white" }}>C A G L A R</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="https://facebook.com/" aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" aria-label="Twitter">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/" aria-label="Github">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer social end */}
              </div>
              {/* Col end */}
              <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 className="widget-title">Working Hours</h3>
                <div className="working-hours">
                  We work 7 days a week, every day excluding major holidays. Contact
                  us if you have an emergency, with our Hotline and Contact form.
                  <br />
                  <br /> Monday - Friday:{" "}
                  <span className="text-right">10:00 - 16:00 </span>
                  <br /> Saturday: <span className="text-right">10:00 - 16:00</span>
                  <br /> Sunday and holidays:{" "}
                  <span className="text-right">NO WOKING/span&gt;</span>
                </div>
              </div>
              {/* Col end */}
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 className="widget-title">Services</h3>
                <ul className="list-arrow">
                  <li>
                    <a href="https://www.google.com/">Pre-Construction</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">General Contracting</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Construction Management</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Design and Build</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">Self-Perform Construction</a>
                  </li>
                </ul>
              </div>
              {/* Col end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Footer main end */}
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-info">
                  <span>
                    Copyright © , Designed &amp; Developed by{" "}
                    <a href="https://www.google.com/">Halil Can ÇAYIR</a>
                  </span>
                </div>
              </div>
            </div>
            {/* Row end */}
            <div
              id="back-to-top"
              data-spy="affix"
              data-offset-top={10}
              className="back-to-top position-fixed"
            >
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up" />
              </button>
            </div>
          </div>
          {/* Container end */}
        </div>
        {/* Copyright end */}
      </footer>
      
      
    )
}

export default Footer