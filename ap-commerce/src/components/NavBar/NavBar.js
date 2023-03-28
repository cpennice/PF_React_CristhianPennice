import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Ecommerce</h3>
      <div>
        <button>Home</button>
        <button>Productos</button>
        <button>Servicios</button>
        <button>Nosotros</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
