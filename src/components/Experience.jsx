const experiences = [
  {
    role: 'Software Engineer',
    company: 'Carelon Global Solutions',
    period: 'Jul 2023 - Oct 2025',
    description: [
      'Architected high-performance FastAPI microservices processing large datasets from GCS using event-based triggers',
      'Implemented async streaming and Kafka publishing, reducing processing latency by ~40%',
      'Designed Kafka producers with exactly-once processing, improving throughput by ~20%',
      'Built custom structured logging framework with correlation IDs, reducing debugging time from hours to minutes',
      'Led development of full-stack data traceability platform with zero post-release defects',
      'Created Pytest suites achieving 90%+ code coverage',
      'Deployed Dockerized microservices with GKE autoscaling, improving startup performance by ~30%',
    ],
    tech: ['FastAPI', 'Kafka', 'Python', 'GCP', 'Docker', 'React', 'PostgreSQL'],
    logo: 'https://ui-avatars.com/api/?name=CG&background=6366f1&color=fff&size=60',
  },
  {
    role: 'Software Developer Intern',
    company: 'Techwink Services',
    period: 'May 2021 - Jul 2021',
    description: [
      'Designed and developed responsive websites using WordPress and plugins like Elementor, WooCommerce',
      'Enhanced website functionality using HTML, CSS, JavaScript, and PHP',
      'Implemented secure payment plugins for seamless e-commerce capabilities',
    ],
    tech: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    logo: 'https://ui-avatars.com/api/?name=TW&background=10b981&color=fff&size=60',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Building scalable systems and leading engineering initiatives
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <div className="timeline-info">
                    <h3 className="role">{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
