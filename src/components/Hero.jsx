import { HiDownload } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Ritesh Birthal</h1>
          <h2 className="hero-title">AI Engineer @ Gainwell Technologies</h2>
          <p className="hero-description">
            AI Engineer with 2+ years of experience building scalable systems and AI-driven applications. Experienced in designing and deploying machine learning solutions, integrated with FastAPI microservices and Kafka-based data pipelines on GCP. Skilled in bridging backend engineering with AI/ML workflows, ensuring scalable and production-ready systems.
          </p>
          
          <div className="hero-buttons">
            <a href="https://drive.google.com/drive/folders/1g6tog7RRSCWncD0CJLiLzum8OBGsBBcz" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <HiDownload /> Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Ritesh Birthal"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
