import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'FlowForge',
    badge: 'Full Stack',
    description: 'Visual pipeline builder for creating node-based workflows. Features 9 node types, drag-and-drop interface, dynamic text node with variable detection, DAG validation, and localStorage persistence.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    tags: ['React', 'ReactFlow', 'FastAPI', 'Zustand'],
    github: 'https://github.com/riteshbirthal/FlowForge',
    live: 'https://flowforge-pipeline-builder.onrender.com/',
  },
  {
    title: 'Mock Mitra',
    badge: 'Full Stack',
    description: 'Comprehensive mock test platform for government exam preparation (SSC, Banking, Railway, UPSC). Features 20,000+ questions, timed tests, detailed solutions, and subject-wise study materials.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    tags: ['React', 'FastAPI', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/riteshbirthal/mock-mitra',
    live: 'https://mock-mitra.onrender.com/',
  },
  {
    title: 'Multiplayer Sudoku',
    badge: 'Full Stack',
    description: 'Real-time multiplayer Sudoku game with lobby system, live chat, and leaderboard. Players compete to solve the same puzzle with rankings showing gold, silver, and bronze trophies.',
    image: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600&h=400&fit=crop',
    tags: ['React', 'FastAPI', 'WebSockets', 'MongoDB'],
    github: 'https://github.com/riteshbirthal/Multiplayer-Sudoku',
    live: 'https://multiplayer-sudoku-n9bt.onrender.com/',
  },
  {
    title: 'AI Quote Reel Bot',
    badge: 'AI/ML',
    description: 'Automated YouTube Shorts generator using Google Gemini AI. Creates motivational quote reels with AI-generated quotes, text-to-speech voiceover, and background music.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'Gemini AI', 'FFmpeg', 'Docker'],
    github: 'https://github.com/riteshbirthal/AI-Quote-Generator',
    live: null,
  },
  {
    title: 'NightDrift',
    badge: 'Frontend',
    description: 'Hypnotic spiral visualization web app for sleep induction and relaxation. Features procedurally generated SVG/Canvas patterns with exponential spirals, safe animations, and customizable controls.',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Canvas', 'SVG', 'Vite'],
    github: 'https://github.com/riteshbirthal/NightDrift',
    live: "https://night-drift.vercel.app/",
  },
  {
    title: 'Data Traceability Platform',
    badge: 'Professional',
    description: 'End-to-end system to track, audit, and debug data flow across distributed microservices. Backend in FastAPI, real-time events via Kafka, React dashboard for visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['FastAPI', 'React', 'Kafka', 'GCP', 'Docker'],
    github: null,
    live: null,
  },
  {
    title: 'Global Chat',
    badge: 'Full Stack',
    description: 'A lightweight real-time chat application with modern UI, focusing on responsiveness and efficient message handling using WebSockets.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/riteshbirthal/global-chat',
    live: 'https://riteshbirthal.github.io/global-chat',
  },
  {
    title: 'Virtual Mouse',
    badge: 'Computer Vision',
    description: 'Computer vision-based virtual mouse using hand gesture tracking. Controls cursor movement and mouse clicks through real-time image processing.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=600&h=400&fit=crop',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
    github: 'https://github.com/riteshbirthal/Projects/tree/master/Python/Others/Virtual%20Mouse',
    live: null,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built and contributed to
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-badge">{project.badge}</span>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
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

export default Projects
