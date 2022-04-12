import React from 'react';

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-light bg-light fixed-top shadow-sm">
          <div className="container-lg">
            <a className="navbar-brand text-danger fw-bold fs-4" href="#">U.A</a>
            <div className="dropdown">
              <button className="btn btn-secondary btn-danger px-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bars" />
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#home">Home</a></li>
                <li><a className="dropdown-item" href="#about">About</a></li>
                <li><a className="dropdown-item" href="#services">Services</a></li>
                <li><a className="dropdown-item" href="#portfolio">Portfolio</a></li>
                {/* <li>
                  <a className="dropdown-item" href="#testimonials">Testmonials</a>
                </li> */}
                <li><a className="dropdown-item" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
}

export default Navbar;