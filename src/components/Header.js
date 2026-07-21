import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Header() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const toLink = (url) => {
        window.open(url, "_blank")
    }

  return (
    <div className="header">
        <div className='main' style={styles.main}>
            <div className="box-flex-between">
                <div className="menu">
                    <img
                        src={process.env.PUBLIC_URL + '../assets/img/bio.jpg'}
                        alt="Fajar Riza"
                        style={styles.avatar}
                    />
                    <Link className="logo" to="/">Fajar Riza Fauzi</Link>
                    <Link className="item" to="/Showcase">Showcase</Link>
                    <Link className="item" to="#" onClick={() => toLink('https://github.com/fajarizaf')}>
                        <FontAwesomeIcon icon={faGithub} style={styles.git} />
                        Sources
                    </Link>
                </div>
                <div className='box-nav-right' style={{gap: '8px', alignItems: 'center'}}>
                    <a
                        href="https://wa.me/6282125649665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='btn'
                        style={styles.waBtn}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} style={styles.waIcon} />
                        Whatsapp
                    </a>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        style={styles.themeBtn}
                        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

var styles = {
    main: {
      paddingBottom:'0px'
    },
    avatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '1.5px solid var(--border)'
    },
    waBtn: {
        background: 'var(--bg-card)',
        color: 'var(--text-secondary)',
        padding: '8px 16px',
        borderRadius: '10px',
        fontSize: '13px',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        textDecoration: 'none',
        border: '1px solid var(--border)'
    },
    waIcon: {
        fontSize: '14px'
    },
    themeBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '38px',
        height: '38px',
        borderRadius: '10px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        transition: 'var(--transition)'
    },
    git: {
        fontSize:'14px',
        marginRight:'6px',
        opacity: 0.7
    }
}

export default Header;
