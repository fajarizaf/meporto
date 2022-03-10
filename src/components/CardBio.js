import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

function CardBio(props) {

  const toLink = (url) => {
    window.open(url, "_blank")
  }

  const toEmail = (url) => {
    window.location.href(url)
  }

  return (
      <Fragment>
          <div style={{height:50}}></div>
          <div className="cards">
            <div className="row">
                <h3 className="font-1" style={styles.hi}>
                  <FontAwesomeIcon style={styles.hastag} icon={faHashtag} />
                  Hi, My Name is Fajar
                </h3>
                <p style={{color:'#1b1e17'}}>It has been eight years since he has been involved in the world of Information 
                Technology. I am happy to be given the opportunity to work according to my passion. during my work I focused 
                on research and development and learned everything about the IT world and like to try new things related to 
                technology.
                </p>
                <div style={styles.flex}>
                  <FontAwesomeIcon style={styles.icon} icon={faLinkedin} onClick={() => toLink('https://www.linkedin.com/in/fajar-riza-6199b6120/')} />
                  <FontAwesomeIcon style={styles.icon} icon={faInstagramSquare} onClick={() => toLink('https://www.instagram.com/fajarizaf.id/')} />
                  <FontAwesomeIcon style={styles.icon} icon={faEnvelopeOpen} onClick={() =>  window.location ='mailto:contact@fajariza.my.id'}  />
                </div>
            </div>
            <div className="row" style={{marginLeft:20,marginRight:20}}>
              <img style={styles.avatar} className="avatar" src={process.env.PUBLIC_URL + '../assets/img/bio.jpg'} />
            </div>
          </div>
      </Fragment>
  )
}

export default CardBio;

const styles = {
  flex: {
    display:'flex',
    justifyContent:'flex-start'
  },
  hi: {
    color:'#1b1e17',
    fontSize:'30'
  },
  hastag: {
    fontSize:'28px',
    color:'#ca3517',
    marginRight:'15px',
    marginLeft:'-40px'
  },
  avatar: {
    border:'8px solid #efefef',
  },
  icon: {
    marginRight:'15px',
    fontSize:'22px'
  }
}
