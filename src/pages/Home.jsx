function Home() {
  return (
    <main>
      <section style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} className="d-flex align-items-center justify-content-center text-white text-center">
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn btn-danger mt-3">En savoir plus</button>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>À propos</h2>
              <img src="/images/john-doe-about.jpg" alt="John Doe" className="img-fluid" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>              
            </div>
            
            <div className="col-md-6">
              <h2>Mes compétences</h2>
              <p>HTML5 90%</p>              
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                </div>

              <p>CSS3 80%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                </div>

              <p>JavaScript 70%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                </div>

              <p>PHP 60%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                </div>

              <p>React 50%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>

  )
}

export default Home
