import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaDatabase 
} from 'react-icons/fa'
import { 
  SiTypescript, SiJavascript, SiFastapi, SiDjango, SiFlask,
  SiMongodb, SiPostgresql, SiApachekafka, SiGooglecloud,
  SiCplusplus, SiExpress
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'Kafka', icon: <SiApachekafka /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'GCP', icon: <SiGooglecloud /> },
        { name: 'Git', icon: <FaGitAlt /> },
      ],
    },
    {
      title: 'Core Foundations',
      skills: [
        { name: 'Data Structures', icon: null },
        { name: 'Algorithms', icon: null },
        { name: 'System Design', icon: null },
        { name: 'Distributed Systems', icon: null },
        { name: 'Operating Systems', icon: null },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and concepts I work with
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
