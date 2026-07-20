import React from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Slide() {

  const navigate = useNavigate()

  const onCode = () => {
    navigate('/write-code-with')
  }

  return (
    <div className="slide">
        <div className="main" style={styles.main}>
            <div style={styles.content}>
                <div style={styles.tagline}>
                    <span style={styles.label}>Software Engineer</span>
                    <h1 style={styles.title}>Crafting Digital<br/>Experiences</h1>
                    <p style={styles.subtitle}>
                        Building scalable applications with clean code<br />
                        and thoughtful design decisions.
                    </p>
                </div>
                <div>
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
        width: '100%'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tagline: {
        maxWidth: '500px'
    },
    label: {
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: '600',
        color: 'var(--accent)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '16px',
        padding: '6px 14px',
        background: 'var(--accent-subtle)',
        border: '1px solid var(--border-accent)',
        borderRadius: '20px'
    },
    title: {
        fontSize: '3.2rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: '700',
        color: 'var(--text-primary)',
        lineHeight: '1.1',
        letterSpacing: '-1.5px',
        marginBottom: '20px'
    },
    subtitle: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
        maxWidth: '420px'
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
