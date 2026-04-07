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
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Profil GitHub</h5>
                  <button className="btn-close" onClick={() => setShow(false)}></button>
                </div>
                <div className="modal-body">
                  {githubData ? (
                    <>
                      <img src={githubData.avatar_url} alt="avatar" className="rounded-circle mb-3" width="80" />
                      <p><strong>Nom :</strong> {githubData.name}</p>
                      <p><strong>Bio :</strong> {githubData.bio}</p>
                      <p><strong>Repos publics :</strong> {githubData.public_repos}</p>
                      <p><strong>Followers :</strong> {githubData.followers}</p>
                    </>
                  ) : (
                    <p>Chargement...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
  )
}


export default Modal
