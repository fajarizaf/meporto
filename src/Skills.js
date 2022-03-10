import React, { Fragment } from "react"
import CardPorto from "./components/CardPorto"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faDatabase, faServer, faCode, faHardDrive, faCrop } from '@fortawesome/free-solid-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return(
        <Fragment>
            <div className="slide" style={styles.slide}> 
                <div className="main">

                    <h2 className="font-1" style={styles.hi}>
                        <FontAwesomeIcon style={styles.hastag} icon={faHashtag} />
                        Skills
                    </h2>
                    <h4 style={styles.line}>Write code on side</h4>

                    <div className="box-flex-between">
                        <div className='card2'>
                            <div className="hcard">
                                <p>Backend</p>    
                            </div>
                            <ol>
                                <li>PHP Native with OOP</li>
                                <li>PHP Framework : Codeigniter, Laravel</li>
                                <li>Nodejs with Express Framework</li>
                                <li>RestFull API : nodejs, Laravel Lumen </li>    
                            </ol>   
                        </div>
                        <div className='card2'>
                            <div className="hcard">
                                <p>Frondend</p>    
                            </div>
                            <ol>
                                <li>HTML5</li>
                                <li>CSS - Bootstrap, Semantic UI</li>
                                <li>Tailwind CSS</li>
                                <li>Javascript ES6</li>
                                <li>React JS</li>   
                                <li>React Native</li>    
                            </ol>       
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="main">
                <h3 className="font-1" style={styles.db}>
                    <FontAwesomeIcon style={styles.icn} icon={faHardDrive} />
                    Database to use
                </h3>
                <p>MYSQL, PostgreeSQL, MongoDB</p>
                <p style={styles.notedb}>Usually interaction with my database<br/> using ORM Sequelizee</p> 
            </div>
            <br/>
            <div className="main">
                <h3 className="font-1" style={styles.db}>
                    <FontAwesomeIcon style={styles.icn} icon={faServer} />
                    Deployments
                </h3>
                <p>Heroku, Cpanel, Plesk</p>
                <p style={styles.notedb}>Usually for development using nodejs or react js I use heroku for deployment <br/> and development using php I use cpanel or plesk</p> 
            </div>
            <br/>
            <div className="main">
                <h3 className="font-1" style={styles.db}>
                    <FontAwesomeIcon style={styles.icn} icon={faCrop} />
                    Design
                </h3>
                <p>Photosohop, Ilustrator</p>
                <p style={styles.notedb}>I usually use the above tools for frontend design needs <br/>such as making banners, icons or wireframe designs</p> 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Fragment>
    )
}

const styles = {
    slide: {
        height:'450px',
        justifyContent: ''
    },
    hi: {
        color:'#fff',
        fontSize:'40px',
        paddingTop:'0px',
        marginBottom:'0px',
        marginTop:'20px'
    },
    hastag: {
        fontSize:'28px',
        color:'#ca3517',
        marginRight:'15px',
        marginLeft:'-40px'
    },
    icn: {
        fontSize:'28px',
        color:'#ca3517',
        marginRight:'15px'
    },
    icon: {
        fontSize: '40px'
    },
    line: {
        marginTop:'0px',
        marginBottom:'35px',
        color:'#000',
        fontSize:'16px'
    },
    notedb: {
        color:'#666',
        fontSize:'14px'
    }
}

export default Skills