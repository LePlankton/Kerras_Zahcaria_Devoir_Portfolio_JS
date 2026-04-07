import { NavLink } from "react-router-dom";

function Footer() {
  return (
<footer className="bg-dark text-white py-4">
  <div className="container px-5">
    <div className="row text-start">

      <div className="col-md-4">
        <h5>JOHN DOE</h5>
        <p className="mb-0">40 rue Laure Diebold</p>
        <p className="mb-0">69009 Lyon, France</p>
        <p className="mb-0">10 20 30 40 50</p>
        <p className="mb-0">john.doe@gmail.com</p>
        
        <ul className="list-unstyled d-flex gap-3">
          <li>
            <a href="https://github.com/..." className="text-secondary" target="_blank" rel="noopener noreferrer nofollow">
              <i className="bi bi-github fs-5"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/..." className="text-secondary" target="_blank" rel="noopener noreferrer nofollow">
              <i className="bi bi-twitter fs-5"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/..." className="text-secondary" target="_blank" rel="noopener noreferrer nofollow">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-4">
        <h5>Liens utiles</h5>
        <ul className="list-unstyled">
          <li><NavLink className="text-white text-decoration-none" to="/">Home</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/services">Services</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/contact">Contact</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/mentions-legales">Mentions Légales</NavLink></li>
        </ul>
      </div>

      <div className="col-md-4">
        <h5>Mes dernières réalisations</h5>
        <ul className="list-unstyled">
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Fresh Food</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Restaurant Akira</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Espace bien-être</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">SEO</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Création d'une API</NavLink></li>
          <li><NavLink className="text-white text-decoration-none" to="/portfolio">Maquette d'un site</NavLink></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
