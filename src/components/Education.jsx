import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'BS-MS Dual Degree',
    field: 'Physics',
    institution: 'Indian Institute of Technology (IIT) Kanpur',
    duration: '2018 - 2023',
    grade: 'CGPA: 9/10',
    highlights: [
      'Self-learned software development and successfully transitioned into the tech industry',
      'Applied strong analytical and computational skills from Physics to software engineering',
    ],
  },
  {
    degree: 'Higher Secondary (XII)',
    field: 'Science (PCM)',
    institution: "St. Paul Sr. Sec. School, Sikar (Rajasthan)",
    duration: '2016 - 2018',
    grade: '85%',
    highlights: [],
  },
  {
    degree: 'Secondary (X)',
    field: 'General',
    institution: 'Updesh Sr. Sec. School Noonsar, Bhiwani (Haryana)',
    duration: '2016',
    grade: '92.8%',
    highlights: [],
  },
]

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <div className="education-info">
                    <h3>{edu.degree}</h3>
                    <p className="education-field">{edu.field}</p>
                    <p className="education-institution">{edu.institution}</p>
                  </div>
                  <div className="education-meta">
                    <span className="education-duration">{edu.duration}</span>
                    <span className="education-grade">{edu.grade}</span>
                  </div>
                </div>
                {edu.highlights.length > 0 && (
                  <ul className="education-highlights">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-cta">
          <h3>View All Certificates</h3>
          <p>Access my course completion certificates and credentials</p>
          <a 
            href="https://drive.google.com/drive/folders/1g6tog7RRSCWncD0CJLiLzum8OBGsBBcz?usp=sharing" 
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

export default Education
