function Portfolio() {
  return (
    <main>
      <section style={{
        backgroundImage: "url('/images/banner.jpg')",
        height: "200px",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></section>

      <section className="container text-center my-5">
        <h2 className="fw-bold">Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr className="border-primary border-3 opacity-100 w-50 mx-auto"/>
      </section>

      <section className="container mb-5">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/fresh-food.jpg" alt="Fresh Food" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">Fresh Food</h5>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  Site réalisé avec PHP et MySQL
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/restaurant-japonais.jpg" alt="Restaurant Akira" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">Restaurant Akira</h5>
                <p className="card-text">Site de vente de produits frais en ligne</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  Site réalisé avec Wordpress
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/espace-bien-etre.jpg" alt="Espace bien-être" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">Espace bien-être</h5>
                <p className="card-text">Site de vente de produits en ligne</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  Site réalisé avec LARAVEL
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/seo.jpg" alt="SEO" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">SEO</h5>
                <p className="card-text">Amélioration du référencement d'un site</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  Utilisation des outils SEO
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/coder.jpg" alt="Création d'une API" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">Création d'une API</h5>
                <p className="card-text">Création d'une API RESTFULL publique</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  PHP - SYMFONY
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center p-0">
                <img src="/images/portfolio/screens.jpg" alt="Maquette d'un site web" className="img-fluid mb-3"/>
                <h5 className="card-title fw-bold">Maquette d'un site web</h5>
                <p className="card-text">Création du prototype d'un site</p>
                <a href="#" className="btn btn-primary mt-3">Voir le site</a>
                <div className="card-footer text-muted text-center mt-3">
                  Réalisée avec FIGMA
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </section>

    </main>
  )
}

export default Portfolio
