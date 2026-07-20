import React, { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faServer, faPenRuler } from '@fortawesome/free-solid-svg-icons'

function Skills() {

    const backendSkills = [
        { name: 'PHP Native with OOP', level: 90 },
        { name: 'Laravel & CodeIgniter', level: 85 },
        { name: 'Node.js with Express', level: 80 },
        { name: 'RESTful APIs (Node.js, Lumen)', level: 82 }
    ]

    const frontendSkills = [
        { name: 'HTML5 & Semantic Markup', level: 95 },
        { name: 'CSS — Bootstrap, Tailwind, Semantic UI', level: 88 },
        { name: 'JavaScript ES6+', level: 85 },
        { name: 'React JS', level: 80 },
        { name: 'React Native', level: 75 }
    ]

    return (
        <Fragment>
            <div style={styles.hero}>
                <div className="main" style={styles.heroInner}>
                    <span style={styles.label}>Technical Skills</span>
                    <h2 style={styles.heroTitle}>What I Work With</h2>
                    <p style={styles.heroSub}>Technologies, frameworks, and tools I use to build products</p>
                </div>
            </div>

            <div className="main" style={styles.section}>
                <div style={styles.skillGrid}>
                    <div style={styles.skillCard}>
                        <div style={styles.skillCardHead}>
                            <div style={{ ...styles.skillIcon, background: 'var(--accent-2-subtle)', borderColor: 'rgba(108, 140, 255, 0.2)' }}>
                                <FontAwesomeIcon icon={faCode} style={{ ...styles.skillIconImg, color: 'var(--accent-2)' }} />
                            </div>
                            <div>
                                <h3 style={styles.skillTitle}>Backend</h3>
                                <p style={styles.skillCount}>{backendSkills.length} technologies</p>
                            </div>
                        </div>
                        <div style={styles.skillBody}>
                            {backendSkills.map((skill, i) => (
                                <div key={i} style={styles.skillRow}>
                                    <div style={styles.skillRowTop}>
                                        <span style={styles.skillName}>{skill.name}</span>
                                    </div>
                                    <div style={styles.barBg}>
                                        <div style={{ ...styles.barFill, width: skill.level + '%', background: 'var(--accent-2)' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={styles.skillCard}>
                        <div style={styles.skillCardHead}>
                            <div style={{ ...styles.skillIcon, background: 'var(--accent-3-subtle)', borderColor: 'rgba(192, 132, 252, 0.2)' }}>
                                <FontAwesomeIcon icon={faPenRuler} style={{ ...styles.skillIconImg, color: 'var(--accent-3)' }} />
                            </div>
                            <div>
                                <h3 style={styles.skillTitle}>Frontend</h3>
                                <p style={styles.skillCount}>{frontendSkills.length} technologies</p>
                            </div>
                        </div>
                        <div style={styles.skillBody}>
                            {frontendSkills.map((skill, i) => (
                                <div key={i} style={styles.skillRow}>
                                    <div style={styles.skillRowTop}>
                                        <span style={styles.skillName}>{skill.name}</span>
                                    </div>
                                    <div style={styles.barBg}>
                                        <div style={{ ...styles.barFill, width: skill.level + '%', background: 'var(--accent-3)' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="main" style={styles.section}>
                <h3 style={styles.sectionTitle}>Also Working With</h3>
                <div style={styles.extraGrid}>
                    <div style={{ ...styles.extraCard, borderTopColor: 'var(--accent)' }}>
                        <div style={{ ...styles.extraIcon, background: 'var(--accent-subtle)', borderColor: 'var(--border-accent)' }}>
                            <FontAwesomeIcon icon={faDatabase} style={{ ...styles.extraIconImg, color: 'var(--accent)' }} />
                        </div>
                        <h4 style={styles.extraTitle}>Database</h4>
                        <p style={styles.extraText}>MySQL, PostgreSQL, MongoDB</p>
                        <p style={styles.extraNote}>Usually via ORM tools like Sequelize</p>
                    </div>
                    <div style={{ ...styles.extraCard, borderTopColor: 'var(--accent-2)' }}>
                        <div style={{ ...styles.extraIcon, background: 'var(--accent-2-subtle)', borderColor: 'rgba(108, 140, 255, 0.2)' }}>
                            <FontAwesomeIcon icon={faServer} style={{ ...styles.extraIconImg, color: 'var(--accent-2)' }} />
                        </div>
                        <h4 style={styles.extraTitle}>Deployment</h4>
                        <p style={styles.extraText}>Heroku, cPanel, Plesk</p>
                        <p style={styles.extraNote}>Node/React on Heroku, PHP on cPanel</p>
                    </div>
                    <div style={{ ...styles.extraCard, borderTopColor: 'var(--accent-4)' }}>
                        <div style={{ ...styles.extraIcon, background: 'var(--accent-4-subtle)', borderColor: 'rgba(52, 211, 153, 0.2)' }}>
                            <FontAwesomeIcon icon={faPenRuler} style={{ ...styles.extraIconImg, color: 'var(--accent-4)' }} />
                        </div>
                        <h4 style={styles.extraTitle}>Design</h4>
                        <p style={styles.extraText}>Photoshop, Illustrator</p>
                        <p style={styles.extraNote}>Banners, icons, and wireframes</p>
                    </div>
                </div>
            </div>

            <div style={{ paddingBottom: 80 }} />
        </Fragment>
    )
}

const styles = {
    hero: {
        padding: '60px 0 20px'
    },
    heroInner: {
        textAlign: 'center'
    },
    label: {
        display: 'inline-block',
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--accent-2)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: 12,
        padding: '5px 12px',
        background: 'var(--accent-2-subtle)',
        border: '1px solid rgba(108, 140, 255, 0.2)',
        borderRadius: 20
    },
    heroTitle: {
        color: 'var(--text-primary)',
        fontSize: '2rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        marginBottom: 8
    },
    heroSub: {
        color: 'var(--text-secondary)',
        fontSize: 15,
        margin: 0
    },
    section: {
        marginTop: 40
    },
    sectionTitle: {
        color: 'var(--text-primary)',
        fontSize: '1.1rem',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        marginBottom: 20
    },
    skillGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16
    },
    skillCard: {
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden'
    },
    skillCardHead: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '20px 24px 16px'
    },
    skillIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: 11,
        border: '1px solid',
        flexShrink: 0
    },
    skillIconImg: {
        fontSize: 17
    },
    skillTitle: {
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: 1,
        fontFamily: "'Space Grotesk', sans-serif"
    },
    skillCount: {
        fontSize: 12,
        color: 'var(--text-muted)',
        margin: 0
    },
    skillBody: {
        padding: '0 24px 20px'
    },
    skillRow: {
        marginBottom: 14
    },
    skillRowLast: {
        marginBottom: 0
    },
    skillRowTop: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    skillName: {
        fontSize: 13,
        color: 'var(--text-secondary)',
        fontWeight: 400
    },
    barBg: {
        width: '100%',
        height: 4,
        background: 'var(--bg-secondary)',
        borderRadius: 2,
        overflow: 'hidden'
    },
    barFill: {
        height: '100%',
        borderRadius: 2,
        transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    extraGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 12
    },
    extraCard: {
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderTop: '2px solid',
        borderRadius: 'var(--radius-md)',
        padding: '22px 20px'
    },
    extraIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 38,
        height: 38,
        borderRadius: 10,
        border: '1px solid',
        marginBottom: 14
    },
    extraIconImg: {
        fontSize: 15
    },
    extraTitle: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: 4,
        fontFamily: "'Space Grotesk', sans-serif"
    },
    extraText: {
        fontSize: 13,
        fontWeight: 500,
        color: 'var(--text-secondary)',
        marginBottom: 4
    },
    extraNote: {
        fontSize: 12,
        color: 'var(--text-muted)',
        lineHeight: 1.5
    }
}

export default Skills
