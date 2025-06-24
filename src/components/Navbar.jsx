import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="main-navbar">
      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/tienda"
          className={location.pathname === "/tienda" ? "active" : ""}
        >
          Tienda
        </Link>
        <Link
          to="/carrito"
          className={location.pathname === "/carrito" ? "active" : ""}
        >
          Carrito
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;