import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Timelines() {
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
                        <h3 className="title">PT. Exabytes Network Indonesia</h3>
                        <p className='title-work'>Assistant Manager RnD Division — 2020 - 2021</p>
                        <p>
                        After acquisition by Exabytes, I joined the R&D division focusing on internal platforms
                        and operational systems used by employees and customers, alongside a 2-person team.
                        </p>
                        <ul>
                            <li>Billing system for hosting management across all divisions</li>
                            <li>Web Builder product bundled with hosting and domains</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Registrasi Nama Domain</h3>
                        <p className='title-work'>Software Engineer — 2017 - 2021</p>
                        <p>
                        Led the domain name registration system platform as the primary engineer,
                        handling everything from concept to deployment.
                        </p>
                        <ul>
                            <li>R&D for domain name registration system implementation</li>
                            <li>Full-stack development from concept to production</li>
                            <li>Platform optimization and performance tuning</li>
                            <li>API integration with PANDI endpoint updates</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Junior R&D — 2017 - 2020</p>
                        <p>
                        Contributed to the company's internal platform and product development,
                        collaborating with supervisor and CTO to build addons for the main platform.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Developer — 2015 - 2017</p>
                        <p>
                        Handled full website customization projects, conducted client meetings
                        to discuss concepts, system flows, and deliver tailored solutions.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Designer — 2013 - 2015</p>
                        <p>
                        Started at Indonesia's #1 web hosting company, designing custom web profiles
                        and creating visual assets for client projects.
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
      background: 'var(--accent-2-subtle)',
      border: '1px solid rgba(108, 140, 255, 0.2)'
    },
    headerIcon: {
      fontSize: '18px',
      color: 'var(--accent-2)'
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

export default Timelines;
