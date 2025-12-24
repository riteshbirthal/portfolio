import { HiDownload } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Ritesh Birthal</h1>
          <h2 className="hero-title">Software Engineer | Ex-Carelon Global Solutions</h2>
          <p className="hero-description">
            Software Engineer with 2+ years of experience building scalable, high-performance 
            systems. Specializing in FastAPI microservices, Kafka-driven data pipelines, 
            and cloud-native applications on GCP. BS-MS in Physics from IIT Kanpur.
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
              src="/profile.jpg" 
              alt="Ritesh Birthal"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
