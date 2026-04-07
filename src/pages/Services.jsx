function Services() {
  return (
    <main>
      <section style={{
        backgroundImage: "url('/images/banner.jpg')",
        height: "200px",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></section>

      <section className="container text-center my-5">
        <h2 className="fw-bold">Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenirs.</p>
        <hr className="border-primary border-3 opacity-100 w-50 mx-auto"/>
      </section>

      <section className="container mb-5">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-brush fs-1 text-primary mb-3 d-block"></i>
                <h5 className="card-title fw-bold">UX Design</h5>
                <p className="card-text">L'UX Design est une discipline qui consiste à concevoir des produits
                  (site web, applications mobiles, logiciels, objets connectés, etc...) en plaçant 
                  l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur
                  la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-code-slash fs-1 text-primary mb-3 d-block"></i>
                <h5 className="card-title fw-bold">Développement web</h5>
                <p className="card-text">Le développement de sites web consiste à créer des sites internet en
                  utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc...) et des frameworks
                (Bootstrap, React, Angular, etc...).
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-search fs-1 text-primary mb-3 d-block"></i>
                <h5 className="card-title fw-bold">Référencement</h5>
                <p className="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web
                  pour le faire remonter dans les résultas des moteurs de recherche (Google, Bing, Yahoo, etc...). L'objectif 
                  est d'attirer un maximum de visiteurs qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Services
