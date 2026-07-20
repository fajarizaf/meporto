import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagramSquare, faGithub } from '@fortawesome/free-brands-svg-icons'

function CardBio(props) {

  const toLink = (url) => {
    window.open(url, "_blank")
  }

  return (
      <Fragment>
          <div style={{height:40}}></div>
          <div className="cards" style={styles.card}>
            <div className="row" style={styles.left}>
                <span style={styles.label}>About Me</span>
                <h3 className="font-1" style={styles.hi}>
                  Hi, I'm Fajar
                </h3>
                <p style={styles.bio}>
                  With thirteen years in Information Technology, I've focused on research and development,
                  continuously exploring the ever-evolving tech landscape. I thrive on building solutions
                  and embracing new challenges in technology.
                </p>
                <div style={styles.socials}>
                  <button type="button" onClick={() => toLink('https://github.com/fajarizaf')} style={styles.socialLink}>
                    <FontAwesomeIcon icon={faGithub} style={styles.icon} />
                  </button>
                  <button type="button" onClick={() => toLink('https://www.linkedin.com/in/fajar-riza-6199b6120/')} style={styles.socialLink}>
                    <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
                  </button>
                  <button type="button" onClick={() => toLink('https://www.instagram.com/fajarizaf.id/')} style={styles.socialLink}>
                    <FontAwesomeIcon icon={faInstagramSquare} style={styles.icon} />
                  </button>
                  <button type="button" onClick={() => window.location='mailto:contact@fajariza.my.id'} style={styles.socialLink}>
                    <FontAwesomeIcon icon={faEnvelopeOpen} style={styles.icon} />
                  </button>
                </div>
            </div>
            <div className="row" style={styles.right}>
              <img style={styles.avatar} className="avatar" src={process.env.PUBLIC_URL + '../assets/img/bio.jpg'} alt="Fajar Riza" />
            </div>
          </div>
      </Fragment>
  )
}

export default CardBio;

const styles = {
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    transition: 'var(--transition)',
    marginBottom: '20px'
  },
  left: {
    flex: '1',
    padding: '40px',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  right: {
    width: '280px',
    minHeight: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--bg-secondary)'
  },
  label: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '600',
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '12px',
    padding: '5px 12px',
    background: 'var(--accent-subtle)',
    border: '1px solid var(--border-accent)',
    borderRadius: '20px'
  },
  hi: {
    color: 'var(--text-primary)',
    fontSize: '1.5rem',
    marginBottom: '12px',
    fontFamily: "'Space Grotesk', sans-serif"
  },
  bio: {
    color: 'var(--text-secondary)',
    fontSize: '14px',
    lineHeight: '1.8',
    marginBottom: '24px'
  },
  socials: {
    display: 'flex',
    gap: '8px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    transition: 'var(--transition)',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '18px'
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid var(--border)',
    transition: 'var(--transition)'
  }
}
