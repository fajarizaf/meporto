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
                        <h3 className="title">PT. Exabytes Network Indonesia</h3>
                        <p className='title-work'>Assistant Manager RnD Division ( 2020 - 2021 )</p>
                        <p style={styles.p}>
                        PT. Masterweb was acquired by Exabytes, and in this company I joined the Research and Development division, 
                        but still did the hard coding routine. my responsibility is on the main platform in the company itself which 
                        is used by internal employees and customers, my main focus is more on the development of internal products 
                        and operational systems that are run for the company's internal needs together with my team of 2 people.
                        </p>
                        <ul>
                            <li>For the operational system itself, one example of a billing system for hosting management used by all divisions, both finance, cso, technical support, etc.</li>
                            <li>For internal products, one of them is the Web Builder product which is bundled with hosting and domains.</li>
                        </ul>
                    </div>
                </div>

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
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Junior Research And Development ( 2017 - 2020 )</p>
                        <p style={styles.p}>
                        After I joined this Research And Development division, I was given a good opportunity to grow and learn, 
                        participate in helping the company's internal platform and product development, collaborate with supervisor and CTO 
                        to create addons modules for the main platform.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Developer ( 2015 - 2017 )</p>
                        <p style={styles.p}>
                        At Masterweb itself, we have website development services that are full of customization both systems 
                        and designs whose needs follow the wishes of the client and in this position I have new challenges and 
                        new tasks and responsibilities to handle and work on full website customization projects and hold 
                        meetings with clients to discuss concepts and flows. required system
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="info">
                        <h3 className="title">PT. Masterweb Network</h3>
                        <p className='title-work'>Web Designer ( 2013 - 2015 )</p>
                        <p style={styles.p}>
                        Joining the Number one of Web Hosting company in Indonesia gave me new opportunities and experiences 
                        in the IT world, my duties and responsibilities as a web designer because apart from hard coding 
                        I also have the ability to design both websites and others. at masterweb itself has website 
                        creation services that are full of display customization that are suitable for the needs 
                        of the company's web profile.
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
