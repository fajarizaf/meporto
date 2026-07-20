import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Timeline() {
  return (
    <Fragment>
        <div style={styles.header}>
          <div style={styles.iconWrap}>
            <FontAwesomeIcon icon={faBriefcase} style={styles.headerIcon} />
          </div>
          <div>
            <h3 className='font-1' style={styles.hi}>Work Experience</h3>
            <p style={styles.headerSub}>Professional journey</p>
          </div>
        </div>

        <div className="timeline">
            <div className="outer">

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Registrasi Nama Domain</h3>
                        <p className='title-work'>Software Engineer — 2017 - 2021</p>
                        <p>
                        Led the domain registration system as primary engineer, managing everything
                        from research and development to production deployment.
                        </p>
                        <ul>
                            <li>R&D for domain name registration system</li>
                            <li>Full-stack development from concept to application</li>
                            <li>Platform optimization and problem identification</li>
                            <li>API integration with PANDI endpoint updates</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Epoxyndo Arta Lestari</h3>
                        <p className='title-work'>Graphic Designer — 2014 - 2017</p>
                        <p>
                        Created design content for company marketing including flyers, brochures,
                        banners, and visual assets for this B2B epoxy paint company.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
  );
}

const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '24px'
    },
    iconWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      background: 'var(--accent-subtle)',
      border: '1px solid var(--border-accent)'
    },
    headerIcon: {
      fontSize: '18px',
      color: 'var(--accent)'
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
    }
}

export default Timeline;
