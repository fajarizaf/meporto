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
                        <h3 className="title">Limputra Group</h3>
                        <p className='title-work'>System Analyst — 2025 - Now — Team Development</p>
                        <p>
                        Analyzed business needs across Limputra Group's multi-branch operations and designed an end-to-end HRMS solution.
                        </p>
                        <ul>
                            <li>Gathered HR operational needs across 4 branches (Uninet, Cyber, HDC, Sportopia) and documented business flows for attendance, leave, overtime, expense claims, and payroll</li>
                            <li>Redesigned multi-level approval workflows with self-approval prevention, audit trail, and automated notifications to the next approver</li>
                            <li>Designed integration between external fingerprint system and internal attendance module, including multi-location data mapping and automated sync via scheduled background job</li>
                            <li>Architected a state machine for shift session resolution handling edge cases such as overnight shifts, 120-minute buffer windows, and open session detection</li>
                            <li>Evaluated and implemented face recognition solution (FaceNet512 TFLite) as identity verification layer with similarity threshold (0.7) and re-validation workflow</li>
                            <li>Designed mobile PWA application as primary employee self-service channel — GPS+photo check-in, attendance calendar, leave requests, and salary slips</li>
                            <li>Translated Indonesian regulatory requirements (PPh 21, BPJS, THR) into payroll system logic for accurate tax and benefit calculations</li>
                            <li>Designed standardized API response patterns, error handling architecture, and data flow across 3 layers for 28+ endpoints</li>
                            <li>Coordinated system localization into 26 languages and designed deployment strategy using Docker Compose</li>
                        </ul>
                        <p className='tech-stack'>Tech Stack: Frappe Framework, Python, Custom Development, System Design</p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Uninet Media Sakti</h3>
                        <p className='title-work'>Software Engineer — 2023 - 2025 — Solo & Team Development</p>
                        <p>
                        Full-stack developer responsible for building and maintaining the company's core ISP portal, managing the entire customer lifecycle — from lead pipeline, sales order, subscription activation to invoicing and payment.
                        </p>
                        <ul>
                            <li>Developed core modules (models, routes) covering customer management, orders, subscriptions, invoices, support tickets, and reporting</li>
                            <li>Integrated Mikrotik RouterOS API for real-time automation of service activation, suspension, and deactivation via PPPoE</li>
                            <li>Built queue-based automation system (auto-active, auto-suspend, auto-deactive) with retry logic and idempotency guards to ensure service reliability</li>
                            <li>Implemented deposit & wallet system with auto-deduction, promo engine, credit points, and loyalty rewards</li>
                            <li>Created fraud detection middleware to flag duplicate installation addresses at the neighborhood (RT/RW) level</li>
                            <li>Managed CI/CD pipeline via GitLab CI with SSH-based deployment to staging and production servers</li>
                        </ul>
                        <p className='tech-stack'>Tech Stack: Laravel 8, MySQL, jQuery, Tabler Dashboard, Mikrotik RouterOS API, Laravel Queue</p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Metta Data Center</h3>
                        <p className='title-work'>Software Engineer — 2022 - 2023 — Solo Development</p>
                        <p>
                        Development from scratch of an enterprise data center management platform with solo development.
                        </p>
                        <ul>
                            <li>Built configurable ERP engine with dynamic document types, workflow automation, and event-driven hooks</li>
                            <li>Implemented prorate billing system with multi-cycle support and automated invoice generation via Puppeteer</li>
                            <li>Designed multi-role RBAC with branch-scoped data isolation across admin &amp; customer portals</li>
                            <li>Developed real-time inventory tracking with stock balance and approval workflows</li>
                        </ul>
                        <p className='tech-stack'>Tech Stack: Next.js, TypeScript, Prisma v7, MariaDB, shadcn/ui, Puppeteer</p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Exabytes Network Indonesia</h3>
                        <p className='title-work'>Ass Manager RnD Division — 2020 - 2021 — Team Development</p>
                        <p>
                        After acquisition by Exabytes, I joined the R&D division focusing on internal platforms
                        and operational systems used by employees and customers, alongside a 2-person team.
                        </p>
                        <ul>
                            <li>Development and maintenance billing system for hosting management across all divisions</li>
                            <li>Web Builder product bundled with hosting and domains</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Registrasi Nama Domain</h3>
                        <p className='title-work'>Software Engineer — 2017 - 2021 — Solo Development</p>
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
                        <p className='title-work'>Junior R&D — 2017 - 2020 — Team Development</p>
                        <p>
                        Contributed to the company's internal platform and product development,
                        collaborating with supervisor and CTO to build addons for the main platform.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Developer — 2015 - 2017 — Team Development</p>
                        <p>
                        Handled full website customization projects, conducted client meetings
                        to discuss concepts, system flows, and deliver tailored solutions.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Designer — 2013 - 2015 — Team Development</p>
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
