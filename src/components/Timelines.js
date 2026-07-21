import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Timelines() {
  const experiences = [
    {
      company: 'Limputra Group',
      role: 'System Analyst',
      period: '2025 - Now',
      mode: 'team',
      description: "Analyzed business needs across Limputra Group's multi-branch operations and designed an end-to-end HRMS solution.",
      achievements: [
        'Gathered HR operational needs across 4 branches (Uninet, Cyber, HDC, Sportopia) and documented business flows for attendance, leave, overtime, expense claims, and payroll',
        'Redesigned multi-level approval workflows with self-approval prevention, audit trail, and automated notifications to the next approver',
        'Designed integration between external fingerprint system and internal attendance module, including multi-location data mapping and automated sync via scheduled background job',
        'Architected a state machine for shift session resolution handling edge cases such as overnight shifts, 120-minute buffer windows, and open session detection',
        'Evaluated and implemented face recognition solution (FaceNet512 TFLite) as identity verification layer with similarity threshold (0.7) and re-validation workflow',
        'Designed mobile PWA application as primary employee self-service channel — GPS+photo check-in, attendance calendar, leave requests, and salary slips',
        'Translated Indonesian regulatory requirements (PPh 21, BPJS, THR) into payroll system logic for accurate tax and benefit calculations',
        'Designed standardized API response patterns, error handling architecture, and data flow across 3 layers for 28+ endpoints',
        'Coordinated system localization into 26 languages and designed deployment strategy using Docker Compose'
      ],
      techStack: ['Frappe Framework', 'Python', 'Custom Development', 'System Design']
    },
    {
      company: 'PT. Uninet Media Sakti',
      role: 'Software Engineer',
      period: '2023 - 2025',
      mode: 'both',
      description: "Full-stack developer responsible for building and maintaining the company's core ISP portal, managing the entire customer lifecycle — from lead pipeline, sales order, subscription activation to invoicing and payment.",
      achievements: [
        'Developed core modules (models, routes) covering customer management, orders, subscriptions, invoices, support tickets, and reporting',
        'Integrated Mikrotik RouterOS API for real-time automation of service activation, suspension, and deactivation via PPPoE',
        'Built queue-based automation system (auto-active, auto-suspend, auto-deactive) with retry logic and idempotency guards to ensure service reliability',
        'Implemented deposit & wallet system with auto-deduction, promo engine, credit points, and loyalty rewards',
        'Created fraud detection middleware to flag duplicate installation addresses at the neighborhood (RT/RW) level',
        'Managed CI/CD pipeline via GitLab CI with SSH-based deployment to staging and production servers'
      ],
      techStack: ['Laravel 8', 'MySQL', 'jQuery', 'Tabler Dashboard', 'Mikrotik RouterOS API', 'Laravel Queue']
    },
    {
      company: 'PT. Metta Data Center',
      role: 'Software Engineer',
      period: '2022 - 2023',
      mode: 'solo',
      description: 'Development from scratch of an enterprise data center management platform with solo development.',
      achievements: [
        'Built configurable ERP engine with dynamic document types, workflow automation, and event-driven hooks',
        'Implemented prorate billing system with multi-cycle support and automated invoice generation via Puppeteer',
        'Designed multi-role RBAC with branch-scoped data isolation across admin & customer portals',
        'Developed real-time inventory tracking with stock balance and approval workflows'
      ],
      techStack: ['Next.js', 'TypeScript', 'Prisma v7', 'MariaDB', 'shadcn/ui', 'Puppeteer']
    },
    {
      company: 'PT. Exabytes Network Indonesia',
      role: 'Ass Manager RnD Division',
      period: '2020 - 2021',
      mode: 'team',
      description: 'After acquisition by Exabytes, I joined the R&D division focusing on internal platforms and operational systems used by employees and customers, alongside a 2-person team.',
      achievements: [
        'Development and maintenance billing system for hosting management across all divisions',
        'Web Builder product bundled with hosting and domains'
      ],
      techStack: []
    },
    {
      company: 'PT. Registrasi Nama Domain',
      role: 'Software Engineer',
      period: '2017 - 2021',
      mode: 'solo',
      description: 'Led the domain name registration system platform as the primary engineer, handling everything from concept to deployment.',
      achievements: [
        'R&D for domain name registration system implementation',
        'Full-stack development from concept to production',
        'Platform optimization and performance tuning',
        'API integration with PANDI endpoint updates'
      ],
      techStack: []
    },
    {
      company: 'PT. Masterweb Network',
      role: 'Junior R&D',
      period: '2017 - 2020',
      mode: 'team',
      description: "Contributed to the company's internal platform and product development, collaborating with supervisor and CTO to build addons for the main platform.",
      achievements: [],
      techStack: []
    },
    {
      company: 'PT. Masterweb Network',
      role: 'Web Developer',
      period: '2015 - 2017',
      mode: 'team',
      description: 'Handled full website customization projects, conducted client meetings to discuss concepts, system flows, and deliver tailored solutions.',
      achievements: [],
      techStack: []
    },
    {
      company: 'PT. Masterweb Network',
      role: 'Web Designer',
      period: '2013 - 2015',
      mode: 'team',
      description: "Started at Indonesia's #1 web hosting company, designing custom web profiles and creating visual assets for client projects.",
      achievements: [],
      techStack: []
    }
  ]

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
        {experiences.map((exp, idx) => (
          <div className="card" key={idx}>
            <div className="info">
              <h3 className="title">{exp.company}</h3>
              <p className="title-work">{exp.role} — {exp.period}</p>
              <div className={`mode-badge ${exp.mode}`}>
                {exp.mode === 'solo' ? 'Solo Development' : exp.mode === 'team' ? 'Team Development' : 'Solo & Team'}
              </div>
              <p>{exp.description}</p>
              {exp.achievements.length > 0 && (
                <ul>
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {exp.techStack.length > 0 && (
                <div className="tech-tags">
                  {exp.techStack.map((tech, i) => (
                    <span className="tag" key={i}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
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
