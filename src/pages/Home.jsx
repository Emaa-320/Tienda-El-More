import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/productos/inicio.png';

function Home() {
  const [ampliada, setAmpliada] = useState(false);

  return (
    <div className="home-container">
      <img
        src={logo}
        alt="Logo de inicio"
        className="home-logo animated-img"
        style={{ cursor: 'pointer' }}
        onClick={() => setAmpliada(true)}
      />
      <h2 className="animated-title">¡Bienvenido a la tienda!</h2>
      <p className="home-slogan">¡Descubre productos únicos y ofertas especiales solo aquí!</p>
      <Link to="/tienda" className="home-btn">Ver productos</Link>
      {ampliada && (
        <div className="img-modal-bg" onClick={() => setAmpliada(false)}>
          <img src={logo} alt="Logo ampliado" className="img-modal-img" />
        </div>
      )}
    </div>
  );
}

export default Home;
