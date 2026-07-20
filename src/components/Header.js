import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Header() {

    const toLink = (url) => {
        window.open(url, "_blank")
    }

  return (
    <div className="header">
        <div className='main' style={styles.main}>
            <div className="box-flex-between">
                <div className="menu">
                    <Link className="logo" to="/">Fajar Riza Fauzi</Link>
                    <Link className="item" to="/Showcase">Showcase</Link>
                    <Link className="item" to="#" onClick={() => toLink('https://github.com/fajarizaf')}>
                        <FontAwesomeIcon icon={faGithub} style={styles.git} />
                        Sources
                    </Link>
                </div>
                <div className='box-nav-right'>
                    <button className='btn' type="button" style={styles.btn}>
                        <FontAwesomeIcon style={styles.icon} icon={faLightbulb} />
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
    btn: {
        background: 'var(--accent)',
        color: 'var(--bg-primary)',
        padding: '8px 12px',
        width: 'auto',
        borderRadius: '10px',
        fontSize: '16px',
        lineHeight: '1'
    },
    icon: {
        fontSize:'18px'
    },
    git: {
        fontSize:'14px',
        marginRight:'6px',
        opacity: 0.7
    }
}

export default Header;
