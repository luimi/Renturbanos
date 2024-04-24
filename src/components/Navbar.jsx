import React from 'react';
import logo from '../assets/icons/logo-button.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand align-middle" style={title} href="#top">
          <img src={logo} className="me-1" style={{ width: 20 }} alt="logo"/>
          <b>Renturbano</b>
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item text-center visually-hidden">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: 'var(--red)' }}
                href='#top'
              >
                <i className="bi bi-geo-alt-fill me-2"></i>
                Barranquilla
                <i className="bi bi-chevron-down ms-2"></i>
              </a>
            </li>
            <li className="nav-item visually-hidden">
              <div className="input-group rounded-pill border border-1 m-0">
                <span className="input-group-text bg-transparent border-0">
                  <i className="bi bi-image-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  aria-label="busqueda"
                  placeholder="Encuentra lo que quieras..."
                />
                <span className="input-group-text bg-transparent border-0">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </li>
            <li className="nav-item me-3">
              <button type="button" className="btn btn-light">
                <i className="bi bi-person-circle me-2"></i>
                Ingresar
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn bg-red rounded-pill "
              >
                Publica Gratis
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const title = {
  color: 'var(--green)',
};
export default Navbar;
