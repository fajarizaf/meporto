import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Student(props) {
  const educations = [
    { school: 'University of Indraprasta PGRI', degree: 'Bachelor of Computer Science', period: '2009 — 2013' },
    { school: 'Madrasah Aliyah Negeri 1 Kota Bekasi', degree: 'High School', period: '2007 — 2009' },
    { school: 'SMP Negeri 21 Bekasi', degree: 'Middle School', period: '2005 — 2007' },
    { school: 'SDN Perwira Negeri 03 Bekasi', degree: 'Elementary School', period: '1999 — 2005' }
  ]

  return (
      <Fragment>
        <div style={styles.section}>
          <div style={styles.header}>
            <div style={styles.iconWrap}>
              <FontAwesomeIcon icon={faGraduationCap} style={styles.headerIcon} />
            </div>
            <div>
              <h3 className="font-1" style={styles.hi}>Education</h3>
              <p style={styles.headerSub}>Academic background</p>
            </div>
          </div>
          <div style={styles.grid}>
            {educations.map((edu, idx) => (
              <div key={idx} style={styles.card}>
                <div style={styles.cardHeader}>
                  <span style={styles.period}>{edu.period}</span>
                </div>
                <h4 style={styles.school}>{edu.school}</h4>
                <p style={styles.degree}>{edu.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
  )
}

export default Student;

const styles = {
  section: {
    marginBottom: '40px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '32px'
  },
  iconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'var(--accent-4-subtle)',
    border: '1px solid rgba(52, 211, 153, 0.2)'
  },
  headerIcon: {
    fontSize: '18px',
    color: 'var(--accent-4)'
  },
  headerSub: {
    fontSize: '13px',
    color: 'var(--text-muted)',
    marginTop: '2px'
  },
  hi: {
    color: 'var(--text-primary)',
    fontSize: '1.25rem',
    marginBottom: '0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px'
  },
  card: {
    padding: '20px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    transition: 'var(--transition)'
  },
  cardHeader: {
    marginBottom: '8px'
  },
  period: {
    fontSize: '11px',
    fontWeight: '600',
    color: 'var(--accent-4)',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  school: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '4px'
  },
  degree: {
    fontSize: '0.82rem',
    color: 'var(--text-muted)'
  }
}
