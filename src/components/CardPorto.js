import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faChevronDown, faChevronUp, faExpand, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const API_URL = process.env.REACT_APP_API_URL || '/api';

const STATIC_PROJECTS = [
  { id: "1", title: "Mobile Apps - System Information Covid 19", description: "Mobile application built with React Native Expo for real-time COVID-19 data tracking.", image: "../assets/img/picovid.jpg", link: "https://github.com/fajarizaf/picovid", linkType: "github", demoUrl: "", features: "<ul><li>Real-time COVID-19 data tracking</li><li>Interactive charts and statistics</li><li>Province-level data breakdown</li><li>Cross-platform (iOS & Android)</li></ul>" },
  { id: "2", title: "WHMCS Addons - Bulk Services", description: "Hosting bulk services module integrated with WHMCS internal API.", image: "../assets/img/bulkservices.png", link: "https://github.com/fajarizaf/WHMCS-ADDON-BulkServices", linkType: "github", demoUrl: "", features: "<ul><li>Bulk service management via WHMCS API</li><li>Automated provisioning</li><li>CSV import/export support</li></ul>" },
  { id: "3", title: "Penulis - Blog Platform", description: "A clean blog platform inspired by Medium, built with React JS.", image: "../assets/img/penulis.jpg", link: "https://github.com/fajarizaf/penulis.site", linkType: "github", demoUrl: "http://penulis.site", features: "<ul><li>Rich text editor for writing</li><li>Markdown support</li><li>Responsive design</li><li>Tag-based categorization</li></ul>" },
  { id: "4", title: "Certification Issuance System", description: "Internal web application for managing and issuing certifications.", image: "../assets/img/asttatindo.jpg", link: "https://app.asttatindo.org", linkType: "website", demoUrl: "https://app.asttatindo.org", features: "<ul><li>Certificate generation & print</li><li>Participant data management</li><li>Verification system</li><li>Batch processing support</li></ul>" },
  { id: "5", title: "WHMCS Addons - ShopeePay", description: "ShopeePay payment gateway module integrated with WHMCS.", image: "../assets/img/addons-shopeepay.jpg", link: "https://github.com/fajarizaf/WHMCS-ADDON-ShopeePay", linkType: "github", demoUrl: "", features: "<ul><li>ShopeePay payment integration</li><li>Automatic invoice reconciliation</li><li>Callback handling</li></ul>" },
  { id: "6", title: "WHMCS Addons - Virtual Account", description: "Faspay Virtual Account payment module for WHMCS orders.", image: "../assets/img/faspay.jpg", link: "https://github.com/fajarizaf/WHMCS-ADDON-Virtual-Account-Payment", linkType: "github", demoUrl: "", features: "<ul><li>Virtual Account generation</li><li>Multi-bank support</li><li>Real-time payment notification</li></ul>" }
];

function CardPorto() {
  const [projects, setProjects] = useState(STATIC_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [zoomImg, setZoomImg] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/showcases`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        if (data.length > 0) setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toLink = (url) => window.open(url, "_blank");

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const accents = [
    { accent: 'var(--accent)', subtle: 'var(--accent-subtle)', border: 'var(--border-accent)', glow: 'rgba(232, 164, 74, 0.12)' },
    { accent: 'var(--accent-2)', subtle: 'var(--accent-2-subtle)', border: 'rgba(108, 140, 255, 0.2)', glow: 'rgba(108, 140, 255, 0.12)' },
    { accent: 'var(--accent-3)', subtle: 'var(--accent-3-subtle)', border: 'rgba(192, 132, 252, 0.2)', glow: 'rgba(192, 132, 252, 0.12)' },
    { accent: 'var(--accent-4)', subtle: 'var(--accent-4-subtle)', border: 'rgba(52, 211, 153, 0.2)', glow: 'rgba(52, 211, 153, 0.12)' },
  ];

  if (loading) {
    return <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>Memuat project...</div>
  }

  return (
    <>
      {zoomImg && (
        <div style={styles.lightbox} onClick={() => setZoomImg(null)}>
          <div style={styles.lightboxInner}>
            <img src={zoomImg} alt="Zoom" style={styles.lightboxImg} />
          </div>
        </div>
      )}

      {projects.map((project, idx) => {
        const a = accents[idx % accents.length];
        const isExpanded = expandedId === project.id;
        const isHovered = hoveredId === project.id;
        const imgSrc = project.image
          ? (project.image.startsWith('http')
              ? project.image
              : project.image.startsWith('/uploads')
                ? `${API_URL.replace('/api', '')}${project.image}`
                : `${process.env.PUBLIC_URL}${project.image}`)
          : null;

        return (
          <div
            key={project.id}
            style={{
              ...styles.card,
              borderColor: isHovered ? a.border : 'var(--border)',
              boxShadow: isHovered ? `0 8px 40px ${a.glow}` : 'none',
              transform: isHovered ? 'translateY(-3px)' : 'none',
            }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={styles.thumbWrap} onClick={() => imgSrc && setZoomImg(imgSrc)}>
              {imgSrc ? (
                <>
                  <img style={styles.img} src={imgSrc} alt={project.title} />
                  <div style={{
                    ...styles.zoomOverlay,
                    opacity: isHovered ? 1 : 0
                  }}>
                    <div style={styles.zoomBadge}>
                      <FontAwesomeIcon icon={faExpand} style={{ fontSize: 14, color: '#fff' }} />
                      <span style={styles.zoomText}>View Image</span>
                    </div>
                  </div>
                </>
              ) : (
                <div style={styles.noImage}>No Image</div>
              )}
            </div>

            <div style={styles.body}>
              <div style={styles.bodyTop}>
                <div style={{ ...styles.accentDot, background: a.accent }} />
                <span style={{ ...styles.accentLabel, color: a.accent }}>
                  {project.linkType === 'github' ? 'Platform' : 'Web App'}
                </span>
              </div>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.desc}>{project.description}</p>

              <div style={styles.actions}>
                {project.link && (
                  <div style={{
                    ...styles.linkBtn,
                    background: isHovered ? a.subtle : 'var(--bg-secondary)',
                    borderColor: isHovered ? a.border : 'var(--border)',
                  }} onClick={() => toLink(project.link)}>
                    <FontAwesomeIcon icon={project.linkType === 'github' ? faGithub : faGlobe} style={{ fontSize: 14, color: isHovered ? a.accent : 'var(--text-secondary)' }} />
                    <span style={{ ...styles.linkText, color: isHovered ? a.accent : 'var(--text-secondary)' }}>
                      {project.linkType === 'github' ? 'Technical Documentation' : 'Visit Site'}
                    </span>
                  </div>
                )}
                {project.demoUrl && (
                  <div style={styles.linkBtn} onClick={() => toLink(project.demoUrl)}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: 14, color: 'var(--text-secondary)' }} />
                    <span style={styles.linkText}>Live Demo</span>
                  </div>
                )}
                {project.features && (
                  <div style={styles.expandBtn} onClick={() => toggleExpand(project.id)}>
                    <span style={styles.expandText}>{isExpanded ? 'Hide Features' : 'Show Features'}</span>
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} style={{ fontSize: 11, color: 'var(--accent)' }} />
                  </div>
                )}
              </div>
            </div>

            {isExpanded && project.features && (
              <div style={styles.featurePanel}>
                <div style={styles.featureHeader}>
                  <span style={styles.featureLabel}>Features</span>
                </div>
                <div
                  className="features-content"
                  style={styles.featureContent}
                  dangerouslySetInnerHTML={{ __html: project.features }}
                />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

const styles = {
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    marginBottom: 16,
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  thumbWrap: {
    position: 'relative',
    width: '100%',
    height: 320,
    overflow: 'hidden',
    cursor: 'zoom-in',
    background: 'var(--bg-secondary)',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center top',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  zoomOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none'
  },
  zoomBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 18px',
    borderRadius: 10,
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.12)'
  },
  zoomText: {
    fontSize: 13,
    fontWeight: 500,
    color: '#fff',
    letterSpacing: 0.3
  },
  noImage: {
    color: 'var(--text-muted)',
    fontSize: 13
  },
  body: {
    padding: '20px 24px 20px'
  },
  bodyTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10
  },
  accentDot: {
    width: 6,
    height: 6,
    borderRadius: '50%'
  },
  accentLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  title: {
    color: 'var(--text-primary)',
    fontSize: '1.15rem',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 8
  },
  desc: {
    color: 'var(--text-secondary)',
    fontSize: 13.5,
    lineHeight: 1.65,
    marginBottom: 18
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap'
  },
  linkBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    padding: '7px 14px',
    borderRadius: 10,
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    cursor: 'pointer',
    transition: 'all 0.25s ease'
  },
  linkText: {
    fontSize: 12,
    fontWeight: 500,
    color: 'var(--text-secondary)',
    letterSpacing: 0.2
  },
  expandBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '7px 14px',
    borderRadius: 10,
    background: 'var(--accent-subtle)',
    border: '1px solid var(--border-accent)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    marginLeft: 'auto'
  },
  expandText: {
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--accent)',
    letterSpacing: 0.2
  },
  featurePanel: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderTop: 'none',
    borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
    padding: '16px 24px 20px'
  },
  featureHeader: {
    marginBottom: 10
  },
  featureLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: 'var(--accent)',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    padding: '3px 8px',
    background: 'var(--accent-subtle)',
    border: '1px solid var(--border-accent)',
    borderRadius: 6
  },
  featureContent: {
    paddingLeft: 4
  },
  lightbox: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: 'rgba(0, 0, 0, 0.88)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'zoom-out',
    padding: 32
  },
  lightboxInner: {
    maxWidth: '90vw',
    maxHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightboxImg: {
    maxWidth: '100%',
    maxHeight: '85vh',
    borderRadius: 12,
    boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.08)'
  }
}

export default CardPorto;
