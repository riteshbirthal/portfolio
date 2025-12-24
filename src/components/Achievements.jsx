import { FaTrophy, FaMedal, FaGraduationCap, FaCode, FaCheckCircle, FaBook } from 'react-icons/fa'

const achievements = [
  {
    icon: <FaTrophy />,
    title: '6 Formal Recognitions',
    description: 'Honored with 6 formal recognitions for outstanding leadership and key contributions to high-performing teams and mission-driven projects.',
    category: 'Leadership',
  },
  {
    icon: <FaMedal />,
    title: 'Best Project Implementation',
    description: 'Received recognition for Best Project Implementation for the Ewall project, demonstrating excellence in execution and delivery.',
    category: 'Project Excellence',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Academic Excellence at IIT Kanpur',
    description: 'Demonstrated outstanding academic performance with A* grades in 2 courses and A grades in 10 courses during BS-MS studies at IIT Kanpur.',
    category: 'Academic',
  },
]

const extraCurriculars = [
  {
    icon: <FaCode />,
    title: '1000+ LeetCode Problems',
    description: 'Solved 1000+ LeetCode problems, maintaining 500+ days streak, earning monthly badges and completing 500-day coding challenges in 2024-25.',
    stats: ['1000+ Problems', '500+ Days Streak', 'Monthly Badges'],
  },
  {
    icon: <FaCheckCircle />,
    title: 'HackerRank Certifications',
    description: 'Successfully completed HackerRank assessments for Problem Solving (Basic & Intermediate), Python, SQL, CSS, and JavaScript (Basic & Intermediate).',
    stats: ['Problem Solving', 'Python', 'SQL', 'JavaScript', 'CSS'],
  },
  {
    icon: <FaBook />,
    title: 'GFG 160 Days Challenge',
    description: "Completed GeeksforGeeks' 22-week \"160 Days of Problem Solving\" course, strengthening proficiency in data structures, algorithms, and complex coding challenges.",
    stats: ['22 Weeks', '160 Days', 'DSA Mastery'],
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Recognition and milestones throughout my journey
        </p>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <span className="achievement-category">{achievement.category}</span>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="extra-section">
          <h3 className="extra-title">Competitive Programming & Learning</h3>
          <div className="extra-grid">
            {extraCurriculars.map((item, index) => (
              <div key={index} className="extra-card">
                <div className="extra-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="extra-stats">
                  {item.stats.map((stat, i) => (
                    <span key={i} className="extra-stat">{stat}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="awards-cta">
          <h3>View All Awards & Certificates</h3>
          <p>Access my achievements, awards, and certification documents</p>
          <a 
            href="https://drive.google.com/drive/folders/1Kq6vhZvtMrqEqNlcIkXZpa-s-eHXT-iZ?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            Open Drive
          </a>
        </div>
      </div>
    </section>
  )
}

export default Achievements
