import { useState, useEffect } from "react"

function Modal() {
  const [show, setShow] = useState(false)
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
  fetch('https://api.github.com/users/github-john-doe')
    .then(res => res.json())
    .then(data => setGithubData(data))
  }, [])

  return (
      <>
        {/* Bouton "En savoir plus" */}
        <button className="btn btn-danger mt-3" onClick={() => setShow(true)}>
          En savoir plus
        </button>

        {/* Modal */}
        {show && (
          <div className="modal d-block" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
            <div className="modal-dialog">
              <div className="modal-content bg-dark text-white">
                <div className="modal-header">
                  <h5 className="modal-title">Mon profil GitHub</h5>
                  <button className="btn-close" onClick={() => setShow(false)}></button>
                </div>
                <div className="modal-body">
                  {githubData ? (
                    <div className="row">
                      <div className="col-7">
                        <img src={githubData.avatar_url} alt="avatar" className="img-fluid rounded w-100" />
                      </div>
                      <div className="col-5">
                        <p className="border-bottom pb-2"><i className="bi bi-person me-2"></i><a href={githubData.html_url} target="_blank" rel="noopener noreferrer">{githubData.name}</a></p>
                        <p className="border-bottom pb-2"><i className="bi bi-geo-alt me-2"></i>{githubData.location || ""}</p>
                        <p className="border-bottom pb-2"><i className="bi bi-journal me-2"></i>Repositories : {githubData.public_repos}</p>
                        <p className="border-bottom pb-2"><i className="bi bi-people me-2"></i>Followers : {githubData.followers}</p>
                        <p><i className="bi bi-person-check me-2"></i>Following : {githubData.following}</p>
                      </div>
                    </div>
                  ) : <p>Chargement...</p>}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShow(false)}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
  )
}


export default Modal
