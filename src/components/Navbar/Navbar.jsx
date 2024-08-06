/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/Cartwidget'


const logoUrl = "https://i.postimg.cc/hjvN6QDF/logo.png/imagen.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >
      <img
        src={logoUrl}
        alt="logo-3D"
        className="img-fluid"
        style={{ maxWidth: "100px" }}
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      {/* Wrapper element */}
      <div className="nav-links" style={{ justifyContent: 'flex-end' }}>
      <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/mouse">Mouse</Link></li>
            <li><Link className="menu-link" to="/productos/teclados">Teclados</Link></li>
            <li><Link className="menu-link" to="/productos/placa de video">Placa de video</Link></li>
            <li><Link className="menu-link" to="/productos/microprocesadores">Microprocesadores</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  );
};



export default Navbar