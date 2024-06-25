import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src="https://cdn.hugeicons.com/icons/lasso-tool-01-stroke-rounded.svg"
        alt="lasso-tool-01"
        width="24"
        height="24"
      />
      <div className="cont cont-menu">
        <i className="fa-solid fa-bars" id="icono-menu"></i>
      </div>
      <ul className="navegacion">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#Servicios">Services</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#before-after">Before & After</a>
        </li>
        <li>
          <a href="#about-us">About us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
