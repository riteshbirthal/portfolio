import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiLightningBolt, HiChat, HiQuestionMarkCircle } from 'react-icons/hi'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ritesh-birthal', icon: <FaLinkedin /> },
  { name: 'GitHub', url: 'https://github.com/riteshbirthal', icon: <FaGithub /> },
  { name: 'Twitter', url: 'https://twitter.com/riteshbirthal', icon: <FaTwitter /> },
  { name: 'YouTube', url: 'https://youtube.com/@riteshbirthal', icon: <FaYoutube /> },
]

const conversationTopics = [
  {
    icon: <HiLightningBolt />,
    title: 'Project Collaboration',
    description: 'Discuss projects & partnerships',
    subject: 'Project Collaboration Inquiry',
    body: 'Hi Ritesh,%0D%0A%0D%0AI would like to discuss a potential project collaboration with you.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: %0D%0A- Timeline: %0D%0A- Requirements: %0D%0A%0D%0ALooking forward to hearing from you!',
  },
  {
    icon: <HiChat />,
    title: 'Technical Consultation',
    description: 'Get expert advice & solutions',
    subject: 'Technical Consultation Request',
    body: 'Hi Ritesh,%0D%0A%0D%0AI am reaching out for technical consultation regarding:%0D%0A%0D%0ATopic: %0D%0A%0D%0ACould you please advise on this matter?%0D%0A%0D%0AThank you!',
  },
  {
    icon: <HiQuestionMarkCircle />,
    title: 'General Inquiry',
    description: 'Any questions or custom needs',
    subject: 'General Inquiry',
    body: 'Hi Ritesh,%0D%0A%0D%0AI have a question regarding:%0D%0A%0D%0A%0D%0A%0D%0AThank you for your time!',
  },
]

const Contact = () => {
  const email = 'riteshbirthal@gmail.com'

  const getMailtoLink = (topic) => {
    return `mailto:${email}?subject=${encodeURIComponent(topic.subject)}&body=${topic.body}`
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to transform ideas into reality? I'm passionate about collaborating on 
          innovative projects, building scalable systems, and solving complex technical 
          challenges. Let's create something extraordinary together.
        </p>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Email</span>
                <a href={`mailto:${email}`} className="contact-info-value">
                  {email}
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-details">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">India</span>
              </div>
            </div>

            <div className="contact-connect">
              <h4>Let's Connect</h4>
              <div className="contact-social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    title={link.name}
                    className="contact-social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-conversation-card">
            <h3>Start a Conversation</h3>
            <p>Choose your preferred discussion topic and I'll help you craft the perfect message.</p>
            
            <div className="conversation-topics">
              {conversationTopics.map((topic, index) => (
                <a
                  key={index}
                  href={getMailtoLink(topic)}
                  className="conversation-topic"
                >
                  <div className="topic-icon">{topic.icon}</div>
                  <div className="topic-content">
                    <h4>{topic.title}</h4>
                    <p>{topic.description}</p>
                  </div>
                  <div className="topic-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
