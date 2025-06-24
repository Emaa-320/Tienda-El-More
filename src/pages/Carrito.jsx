import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import pagoImg from '../assets/productos/Pago.png';

function Carrito() {
  const { carrito, eliminarProducto } = useCarrito();
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);
  const [ampliada, setAmpliada] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="animated-title">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No has agregado productos aún.</p>
      ) : (
        <ul>
          {carrito.map((p, i) => (
            <li key={i} style={{ marginBottom: "1rem" }}>
              <strong>{p.nombre}</strong> — ${p.precio.toLocaleString()}
              <button onClick={() => eliminarProducto(i)} style={{ marginLeft: "1rem", color: "red" }}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 className="animated-title">Total: ${total.toLocaleString()}</h3>
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
          className="animated-title"
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
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="icono-red">
          <i className="bi bi-facebook" style={{ fontSize: "2rem", color: "#fff" }}></i>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="icono-red">
          <i className="bi bi-instagram" style={{ fontSize: "2rem", color: "#fff" }}></i>
        </a>
        <a href="https://wa.me/573235072734" target="_blank" rel="noopener noreferrer" className="icono-red">
          <i className="bi bi-whatsapp" style={{ fontSize: "2rem", color: "#fff" }}></i>
        </a>
      </div>
    </div>
  );
}

export default Carrito;
