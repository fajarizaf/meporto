import React from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faPython, faNodeJs, faPhp, faDocker } from '@fortawesome/free-brands-svg-icons'

function Slide() {

  const navigate = useNavigate()

  const onCode = () => {
    navigate('/write-code-with')
  }

  return (
    <div className="slide">
        <div className="main" style={styles.main}>
            <div style={styles.tagline}>
                    <span style={styles.label}>Software Engineer</span>
                    <h1 style={styles.title}>Crafting Digital<br/>Experiences</h1>
                    <p style={styles.subtitle}>
                        Building scalable applications with clean code
                        and thoughtful design decisions.
                    </p>

                    <div style={styles.location}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.locIcon} />
                        <span>Bekasi, Indonesia · Open to Remote</span>
                    </div>

                    <div style={styles.stats}>
                        <div style={styles.statItem}>
                            <span style={styles.statNum}>13+</span>
                            <span style={styles.statLabel}>Years Experience</span>
                        </div>
                        <div style={styles.statDivider}></div>
                        <div style={styles.statItem}>
                            <span style={styles.statNum}>8</span>
                            <span style={styles.statLabel}>Companies</span>
                        </div>
                        <div style={styles.statDivider}></div>
                        <div style={styles.statItem}>
                            <span style={styles.statNum}>9+</span>
                            <span style={styles.statLabel}>Projects Delivered</span>
                        </div>
                    </div>

                    <div style={styles.specializations}>
                        <span style={styles.specTitle}>Focus</span>
                        <span style={styles.specItem}>Full-Stack Development</span>
                        <span style={styles.specDot}>·</span>
                        <span style={styles.specItem}>System Design</span>
                        <span style={styles.specDot}>·</span>
                        <span style={styles.specItem}>API Architecture</span>
                    </div>

                    <div style={styles.techStack}>
                        <FontAwesomeIcon icon={faPython} style={styles.techIcon} />
                        <FontAwesomeIcon icon={faPhp} style={styles.techIcon} />
                        <FontAwesomeIcon icon={faNodeJs} style={styles.techIcon} />
                        <FontAwesomeIcon icon={faDocker} style={styles.techIcon} />
                    </div>

                    <div style={styles.actions}>
                        <button onClick={() => onCode()} className='btn' type="button" style={styles.btn}>
                            View Skills
                            <FontAwesomeIcon style={styles.arrow} icon={faArrowRight} />
                        </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Slide;

const styles = {
    main: {
        lineHeight: '1.6',
        padding: '40px 44px',
        position: 'relative',
        zIndex: 1
    },
    tagline: {
        maxWidth: '100%'
    },
    label: {
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: '600',
        color: 'var(--accent)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '12px',
        padding: '6px 14px',
        background: 'var(--accent-subtle)',
        border: '1px solid var(--border-accent)',
        borderRadius: '20px'
    },
    title: {
        fontSize: '2.8rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: '700',
        color: 'var(--text-primary)',
        lineHeight: '1.1',
        letterSpacing: '-1.5px',
        marginBottom: '14px'
    },
    subtitle: {
        fontSize: '0.95rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
        maxWidth: '520px',
        marginBottom: '10px'
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        fontSize: '13px',
        color: 'var(--text-muted)',
        marginBottom: '20px'
    },
    locIcon: {
        fontSize: '11px',
        color: 'var(--text-muted)'
    },
    stats: {
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        marginBottom: '18px',
        padding: '14px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
    },
    statNum: {
        fontSize: '1.4rem',
        fontWeight: '700',
        fontFamily: "'Space Grotesk', sans-serif",
        color: 'var(--accent-2)'
    },
    statLabel: {
        fontSize: '11px',
        fontWeight: '500',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.8px'
    },
    statDivider: {
        width: '1px',
        height: '32px',
        background: 'var(--border)'
    },
    specializations: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '14px'
    },
    specTitle: {
        fontSize: '11px',
        fontWeight: '600',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginRight: '4px'
    },
    specItem: {
        fontSize: '13px',
        fontWeight: '500',
        color: 'var(--text-secondary)'
    },
    specDot: {
        color: 'var(--text-muted)',
        fontSize: '10px'
    },
    techStack: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '24px'
    },
    techIcon: {
        fontSize: '22px',
        color: 'var(--text-muted)',
        transition: 'var(--transition)',
        cursor: 'default',
        opacity: 0.7
    },
    actions: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
    },
    btn: {
        background: 'var(--accent)',
        color: 'var(--bg-primary)',
        border: 'none',
        fontSize: '14px',
        fontWeight: '600',
        padding: '14px 28px',
        borderRadius: '14px',
        letterSpacing: '0.3px'
    },
    arrow: {
        paddingLeft: '8px',
        fontSize: '14px'
    }
}
