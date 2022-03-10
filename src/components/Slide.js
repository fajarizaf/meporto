import React from 'react';
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function Slide() {

  const navigate = useNavigate()

  const onCode = () => {
    navigate('/write-code-with')
  }

  return (
    <div className="slide">
        <div className="main" style={styles.main}>
            <div style={styles.flex}>
                <div>
                    <h2 style={styles.tag}>Simple DEV.</h2> 
                    <h4 style={styles.line}>Software Engginer</h4>  
                </div>
                <div>
                    <button onClick={() => onCode()} className='btn' type="button" style={styles.btn}>
                        Write Code With
                        <FontAwesomeIcon style={styles.caret} icon={faCaretRight} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide;

const styles = {
    caret: {
        paddingLeft:'15px',
        paddingRight:'10px'
    },
    btn: {
        background:'rgb(236, 158, 11) none repeat scroll 0% 0%',
        color:'#000',
        border:'1px solid #c06107',
        fontSize:'16px',
        fontWeight:'500',
        marginTop:'-20px',
        paddingLeft:'30px'
    },
    main: {
        lineHeight:'2px'
    },
    tag: {
        fontSize:'53px',
        color:'#fff',
        marginTop:'-10px'
    },
    line: {
        fontSize:'24px',
        color:'#000'
    },
    flex: {
        display:'flex',
        justifyContent:'space-between'
    }
}
