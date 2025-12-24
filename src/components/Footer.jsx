import { useState, useEffect } from 'react'
import { FaHeart, FaCode } from 'react-icons/fa'

const Footer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="footer-bottom">
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>Available for work</span>
          </div>
          <div className="footer-made">
            <span>Made with</span>
            <FaHeart className="heart-icon" />
            <span>&</span>
            <FaCode className="code-icon" />
          </div>
          <div className="footer-time">
            {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
