import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'


function Timeline() {
  return (
    <Fragment>
        <br/>
        <h3 className='font-1' style={styles.hi}>
            <FontAwesomeIcon style={styles.hastag} icon={faHashtag} />
            Work Experiences
        </h3>

        <div classNameName="timeline">
            <div className="outer">


                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Registrasi Nama Domain</h3>
                        <p className='title-work'>Software Engginer ( 2017 - 2021 )</p>
                        <p style={styles.p}>
                        While at Masterweb my position also worked at PT. Registrasi Nama Domain because this company is 
                        a subsidiary of masterweb itself. My role in the company is as the person in charge of running 
                        the application during operation and following my jobdesk while working :    
                        </p>
                        <ul>
                            <li>Conduct research and development related to the implementation of the domain name registration system</li>
                            <li>Hardcoding from concept to application</li>
                            <li>Identify problems and perform optimization on the Daftarnama platform</li>
                            <li>API Integration ( update if there is an update from pandi endpoint API )</li>
                            <li>Doing code versioning ( gitlab repository )</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Epoxyndo Arta Lestari</h3>
                        <p className='title-work'>Graphic Designer ( 2014 - 2017 )</p>
                        <p style={styles.p}>
                        Starting from an interest in art that led me to study design and switch to digital, 
                        I joined this company as a designer whose duties and functions are to create design 
                        content for company marketing needs such as flyer design, brochures, banners, x banners 
                        and others. This company is a non retail (B2B) epoxy paint company.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>

    </Fragment>
  );
}

const styles = {
    p : {
       
    },
    hastag: {
        fontSize:'28px',
        color:'#ca3517',
        marginRight:'15px',
        marginLeft:'-40px'
    },
    hi: {
        color:'#000',
        fontSize:'30',
        paddingTop:'20px'
    },
}

export default Timeline;
