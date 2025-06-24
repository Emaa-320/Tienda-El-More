import deathrow from '../assets/productos/deathrow.png';
import ease from '../assets/productos/ease.png';
import orionbar from '../assets/productos/orionbar.png';
import privbar from '../assets/productos/privbar.png';
import snoopy from '../assets/productos/snoopy.png';
import chrisbrown from '../assets/productos/chrisbrown.png';
import movement from '../assets/productos/movement.png';

import ProductoCard from "../components/ProductoCard";

function Tienda() {
  const productos = [
    { nombre: "Death Row", precio: 18000, imagen: deathrow },
    { nombre: "Ease", precio: 17000, imagen: ease },
    { nombre: "Orion Bar", precio: 23000, imagen: orionbar },
    { nombre: "PRIV Bar", precio: 23000, imagen: privbar },
    { nombre: "Snoopy", precio: 28000, imagen: snoopy },
    { nombre: "C-IS-B Chris Brown", precio: 30000, imagen: chrisbrown },
    { nombre: "Movement", precio: 38000, imagen: movement },
  ];

  const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <div className="tienda-grid">
      <h2 className='animated-title'>Tienda</h2>
      {productos.map((producto, i) => (
        <ProductoCard key={i} {...producto} />
      ))}
    </div>
  );
}

export default Tienda;
