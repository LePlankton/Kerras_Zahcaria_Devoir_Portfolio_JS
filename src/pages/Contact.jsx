function Contact() {
  return (
    <main>
      <section className="container text-center my-5">
        <h2 className="fw-bold">Contact</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
        <hr className="border-primary border-3 opacity-100 w-50 mx-auto"/>
      </section>

      <section className="container mb-5">
        <div className="shadow p-4 rounded">
          <div className="row">
            <div className="col-md-6">
              <h3 className="fw-bold">Formulaire de contact</h3>
              <hr className="border-primary border-3 opacity-100 w-100 mx-auto"/>
              <form className="text-center">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Votre nom" required/>
                </div>

                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Votre adresse email" required/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Votre numéro de téléphone" required/>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Sujet" required/>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" placeholder="Votre message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold">Mes coordonnées</h3>
              <hr className="border-primary border-3 opacity-100 w-100 mx-auto"/>
              <p className="mb-1 fs-5">John Doe</p>
              <p className="mb-1 fs-6"><i className="bi bi-geo-alt"></i> 40 rue Laure Diebold, 69009 Lyon</p>
              <p className="mb-1 fs-6"><i className="bi bi-telephone"></i> 10 20 30 40 50</p>
              <p className="mb-1 fs-6"><i className="bi bi-envelope"></i> john.doe@gmail.com</p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621825!2d4.79640397629123!3d45.77866197108074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1775584864734!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{border: "0"}}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact
