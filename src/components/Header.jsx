import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      
      <NavLink className="navbar-brand" to="/">JOHN DOE</NavLink>

      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase" to="/services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase" to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-uppercase" to="/mentions-legales">Mentions Légales</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Header;