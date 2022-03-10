import React, { Fragment } from "react"
import CardPorto from "./components/CardPorto"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

function Showcase() {
    return(
        <Fragment>
            <div className="slide" style={styles.slide}> 
                <div className="main">

                    <h2 className="font-1" style={styles.hi}>
                        <FontAwesomeIcon style={styles.hastag} icon={faHashtag} />
                        Showcase
                    </h2>
                    <h4 style={styles.line}>Apa yang pernah dibuat dan dikerjakan</h4>

                    <CardPorto />
                </div>
            </div>
        </Fragment>
    )
}

const styles = {
    main: {
        lineHeight:'2px'
    },
    hi: {
        color:'#fff',
        fontSize:'40px',
        paddingTop:'0px',
        marginBottom:'0px',
        marginTop:'10px'
    },
    line: {
        marginTop:'0px',
        marginBottom:'35px',
        color:'#000',
        fontSize:'16px'
    },
    hastag: {
        fontSize:'28px',
        color:'#ca3517',
        marginRight:'15px',
        marginLeft:'-40px'
    },
    slide: {
        height:'auto',
        alignItems: 'unset',
        paddingBottom:'200px'
    }
}

export default Showcase