import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function CardPorto(props) {

  
  const toLink = (url) => {
    window.open(url, "_blank")
  }

  return (
      <Fragment>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/picovid.jpg'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    Mobile Apps - System Information covid 19 
                  </h3>
                  <p style={styles.p}>This is module mobile apps build with react native expo
                  </p>
                </div>
                <div style={styles.flex} className='flex'>
                  <FontAwesomeIcon onClick={()=> toLink('https://github.com/fajarizaf/picovid')} style={styles.icon} icon={faGithub} />
                </div>
            </div>
          </div>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/bulkservices.png'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    WHMCS Addons - Bulk Services 
                  </h3>
                  <p style={styles.p}>This is module bulk services hosting with internal API WHMCS
                  </p>
                </div>
                <div style={styles.flex}>
                  <FontAwesomeIcon  onClick={()=> toLink('https://github.com/fajarizaf/WHMCS-ADDON-BulkServices')} style={styles.icon} icon={faGithub} />
                </div>
            </div>
          </div>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/penulis.jpg'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    REACT Blog - Simple blog post like medium blog 
                  </h3>
                  <p style={styles.p}>This is blog website like medium and build with react js
                  </p>
                </div>
                <div style={styles.flex}>
                  <FontAwesomeIcon onClick={()=> toLink('https://github.com/fajarizaf/penulis.site')} style={styles.icon} icon={faGithub} />
                </div>
            </div>
          </div>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/asttatindo.jpg'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    System Information - Certification Issuance System
                  </h3>
                  <p style={styles.p}>This is internal web applications to use manage data certifications
                  </p>
                </div>
                <div style={styles.flex}>
                  <FontAwesomeIcon onClick={()=> toLink('https://app.asttatindo.org')} style={styles.icon} icon={faGlobe} />
                </div>
            </div>
          </div>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/addons-shopeepay.jpg'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    WHMCS Addons - ShoopePay Payment
                  </h3>
                  <p style={styles.p}>This is module payment ShopeePay integrated on WHMCS order
                  </p>
                </div>
                
                <div style={styles.flex}>
                  <FontAwesomeIcon onClick={()=> toLink('https://github.com/fajarizaf/WHMCS-ADDON-ShopeePay')} style={styles.icon} icon={faGithub} />
                </div>
            </div>
          </div>
          <div className="carding">
            <div className="row" style={styles.cover}>
              <img style={styles.img} src={process.env.PUBLIC_URL + '../assets/img/faspay.jpg'} />
            </div>
            <div className="row" style={styles.content}>
                <div style={styles.contentCard}>
                  <h3 className="font-1" style={styles.hi}>
                    WHMCS Addons - Virtual Account payment
                  </h3>
                  <p style={styles.p}>This is module payment faspay integrated on WHMCS order
                  </p>
                </div>
                
                <div style={styles.flex}>
                  <FontAwesomeIcon onClick={()=> toLink('https://github.com/fajarizaf/WHMCS-ADDON-Virtual-Account-Payment')} style={styles.icon} icon={faGithub} />
                </div>
            </div>
          </div>
      </Fragment>
  )
}

export default CardPorto;

const styles = {
  contentCard: {
    height:'250px',
    overflow:'hidden'
  },
  cover: {
    margin:'0px',
    padding:'0px',
  },
  content: {
    margin:'0px',
    padding:'0px'
  },
  img: {
      objectFit:'cover',
      width:'300px',
      height:'300px'
  },
  flex: {
    padding:'10px',
    display:'flex',
    justifyContent:'flex-end'
  },
  hi: {
    color:'#1b1e17',
    fontSize:'30',
    paddingLeft:'15px',
    paddingRight:'20px'
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
    fontSize:'22px',
    cursor:'pointer'
  },
  p: {
      color:'#1b1e17',
      padding:'15px',
      height:'145px',
      paddingTop:'0px',
      paddingRight:'20px',
      paddingBottom:'0px'
    }
}
