import React, {Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

function Student(props) {
  return (
      <Fragment>
        <br/>
        <br/>
        <h3 className="font-1" style={styles.hi}>
            <FontAwesomeIcon style={styles.hastag} icon={faHashtag} />
            Background Educations
        </h3>
        <br/>
        <div style={styles.space}>
            <p style={styles.school}>- University of Indraprasta PGRI</p>
            <p style={styles.student}>Bachelor degree of computer science ( 2009 - 2013 )</p>
            <p style={styles.school}>- Madrasah Aliyah Negeri 1 Kota Bekasi</p>
            <p style={styles.student}>Hight School ( 2007 - 2009 )</p>
            <p style={styles.school}>- SMP Negeri 21 Bekasi</p>
            <p style={styles.student}>Middle School ( 2005 - 2007 )</p>
            <p style={styles.school}>- SDN Perwira Negeri 03 Bekasi</p>
            <p style={styles.student}>Elementary School ( 1999 - 2005 )</p> 
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Fragment>
  )
}

export default Student;

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
    fontSize:'22px',
  },
  school: {
      fontSize:'16px',
      fontWeight:'600'
  },
  space: {
      paddingLeft:'15px',
  },
  student: {
      fontSize:'14px',
      paddingLeft:'17px',
  }
}
