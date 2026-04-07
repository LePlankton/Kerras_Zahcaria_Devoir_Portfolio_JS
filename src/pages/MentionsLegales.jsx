import { useEffect } from "react"

function MentionsLegales() {

  useEffect(() => {
  const meta = document.createElement('meta')
  meta.name = 'robots'
  meta.content = 'noindex'
  document.head.appendChild(meta)
  return () => document.head.removeChild(meta)
  }, [])

  return (
    <main>
      <section className="container text-center my-5">
        <h2 className="fw-bold">Mentions légales</h2>
        <hr className="border-primary border-3 opacity-100 w-50 mx-auto"/>
      </section>

      <section>
        <div className="container mb-5">
          <div className="accordion" id="accordionMentions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#section1">
                  L'éditeur du site
                </button>
              </h2>
              <div id="section1" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                <div className="accordion-body">
                  <p className="mb-1 fs-5">John Doe</p>
                  <p className="mb-1 fs-6"><i className="bi bi-geo-alt"></i> 40 rue Laure Diebold, 69009 Lyon</p>
                  <p className="mb-1 fs-6"><i className="bi bi-telephone"></i> 10 20 30 40 50</p>
                  <p className="mb-1 fs-6"><i className="bi bi-envelope"></i> john.doe@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#section2">
                  Hébergeur
                </button>
              </h2>
              <div id="section2" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                <div className="accordion-body">
                  <p className="fs-5 fw-bold">alwaysdata</p>
                  <p className="mb-1 fs-6">91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#section3">
                  Crédits
                </button>
              </h2>
              <div id="section3" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                <div className="accordion-body">
                  <p className="fs-5 fw-bold">Crédits</p>
                  <p className="fs-6">Ce site a été réalisé par John Doe, étudiant au 
                    <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer nofollow"> Centre Européen de Formation</a>
                  </p>
                  <p className="fs-6">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
                    <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer nofollow"> Pixabay</a>
                  </p>
                  <p className="fs-6">La favicon de ce site a été fournie par John Doe Icons erstellt von Freepik - 
                    <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer nofollow"> Flaticon</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MentionsLegales
