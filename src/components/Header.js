import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

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
                    <Link className="item" to="/Showcase" style={styles.itm}>Showcase</Link>
                    <Link className="item" to="#" onClick={() => toLink('https://penulis.site')} style={styles.itm}>Post</Link>
                    <Link className="item" to="#" onClick={() => toLink('https://github.com/fajarizaf?tab=repositories')} style={styles.itm}>
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

var styles =  {
    main: {
      paddingBottom:'0px'  
    },
    itm: {
        color:'#000'
    },
    p: {
        padding:'0px',
        margin:'0px',
        marginBottom:'-5px'
    },
    link: {
        color:'#009946'
    },
    btn: {
        borderRadius: '6px',
        background: '#ca3517',
        border: 'none',
        color: 'white',
        padding: '20px',
        paddingTop: '10px',
        paddingBottom: '10px',
        cursor: 'pointer',
        margin: '0px',
        width:'100%',
        borderRadius:'35px',
        display:'inline-flex',
        justifyContent:'center',
        lineHeight:'20px',
        fontSize:'16px'
    },
    icon: {
        fontSize:'22px'
    },
    git: {
        fontSize:'18px',
        marginRight:'8px'
    }
}


export default Header;
