import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import pagoImg from '../assets/productos/Pago.png';

function Carrito() {
  const { carrito, eliminarProducto } = useCarrito();
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);
  const [ampliada, setAmpliada] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <div className="carrito-container">
        <h2 className="carrito-title animated-title">Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>No has agregado productos aún.</p>
        ) : (
          <ul className="carrito-lista">
            {carrito.map((p, i) => (
              <li key={i} className="carrito-item">
                <span>
                  <strong>{p.nombre}</strong> — ${p.precio.toLocaleString()}
                </span>
                <button
                  onClick={() => eliminarProducto(i)}
                  className="carrito-quitar-btn"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3 className="carrito-total animated-title">Total: ${total.toLocaleString()}</h3>
        <div
          className="pago-card"
          style={{
            border: '2px solid #7c007c',
            borderRadius: '14px',
            padding: '1rem',
            width: '320px',
            margin: '2rem auto 0',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #7c007c 100%)',
            boxShadow: '0 4px 16px rgba(179,0,0,0.15)',
            color: '#fff'
          }}
        >
          <img
            src={pagoImg}
            alt="Método de pago"
            className="pago-img animated-title"
            style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => setAmpliada(true)}
          />
          <p style={{ marginTop: '1rem', color: '#fff' }}>Escanea para pagar</p>
        </div>
        {ampliada && (
          <div className="img-modal-bg" onClick={() => setAmpliada(false)}>
            <img src={pagoImg} alt="Método de pago ampliado" className="img-modal-img" />
          </div>
        )}

        {/* Redes sociales */}
        <div className="redes-sociales" style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <a
            href="https://www.tiktok.com/@vape_el_more?_t=ZS-8xTylizO5B4&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-red"
          >
            <i className="bi bi-tiktok" style={{ fontSize: "2rem", color: "#fff" }}></i>
          </a>
          <a
            href="https://www.instagram.com/El_more71/?r=nametag"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-red"
          >
            <i className="bi bi-instagram" style={{ fontSize: "2rem", color: "#fff" }}></i>
          </a>
          <a
            href="https://wa.me/57 3235072734"
            target="_blank"
            rel="noopener noreferrer"
            className="icono-red"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "2rem", color: "#fff" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
