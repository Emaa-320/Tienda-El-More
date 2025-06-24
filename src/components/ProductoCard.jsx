import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';

function ProductoCard({ nombre, precio, imagen = "/productos/deathrow.png" }) {
  const { agregarProducto } = useCarrito();
  const [ampliada, setAmpliada] = useState(false);

  return (
    <>
      <div className="producto-card">
        <img
          src={imagen}
          alt={nombre}
          className="zoom-img"
          style={{ width: '100%', borderRadius: '10px' }}
          onClick={() => setAmpliada(true)}
        />
        <h3>{nombre}</h3>
        <p>Precio: ${precio.toLocaleString()}</p>
        <button
          onClick={() => agregarProducto({ nombre, precio })}
          style={{
            background: 'black',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px'
          }}
        >
          Agregar al carrito
        </button>
      </div>
      {ampliada && (
        <div className="img-modal-bg" onClick={() => setAmpliada(false)}>
          <img src={imagen} alt={nombre} className="img-modal-img" />
        </div>
      )}
    </>
  );
}

export default ProductoCard;
