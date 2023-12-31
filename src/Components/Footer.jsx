import React from "react";

const Footer = () => {

  return (
    <>
      <footer className="page-footer font-small pt-4">
        <div className="container-fluid text-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-center">
              <h5 className="fs-2" style={{ color: "#68FE9A" }}>
                Ecommerce.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis corrupti quidem rerum vitae molestiae consequatur ducimus, earum perferendis dicta corporis fuga optio aliquam id in architecto nostrum! Corrupti, dicta!
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h4>
                Navigations
              </h4>
              <ul
                className=""
                style={{ listStyleType: "square" }}
              >
                <li>
                  <a href="#!" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4
                className="" 
              >
                Services
              </h4>
              <ul
                className=""
                style={{ listStyleType: "square" }}
                
              >
                <li>
                  <a href="#!" className="text-white">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Web Develpment
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Data Analysis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="clearfix w-100 pb-0" />

        <div className="footer-copyright text-center py-3">
          © {new Date().getFullYear()} Copyright:
          <a href="#!">
            <span className="ms-2">Someone</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
