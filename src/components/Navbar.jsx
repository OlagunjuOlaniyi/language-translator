import React from "react";
import "./Navbar.css";
import logo from "../img/oau-logo.png";
import avatar from "../img/avatar.png";

const Navbar = () => {
  return (
    <div className="container text-light d-flex justify-content-between align-content-center p-3">
      <div className="nav__logo border-round">
        <img src={logo} alt="ede logo" />
      </div>
      <div className="nav__button pr-5">
        <button
          className="btn btn-secondary me-lg-5 mt-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Work
          <span>
            <img src={avatar} alt="avatar" className="avatar" />
          </span>
        </button>
      </div>

      {/* The Modal */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-center">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">About Me</h4>
              <button
                type="button"
                className="btn-close bg-danger"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <img src={avatar} alt="" className="w-50 mb-3" />
              <h5>Front-End Developer</h5>
              <p>Role:</p>
            </div>
            <div className="border-top border-bottom w-100 py-3">
              <h5>Olagunju Olaniyi</h5>
              <p>Full Name:</p>
            </div>
            <div className="w-100 py-3">
              <h5>Public Administration</h5>
              <p>Department:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
