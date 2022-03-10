import React, { Fragment } from "react"
import CardBio from "./components/CardBio"
import Slide from "./components/Slide"
import Student from "./components/Student"
import Timeline from "./components/Timeline"

function Home() {
    return(
        <Fragment>
            <Slide />
            <div className="main">
                <CardBio />
            </div>
            <div style={styles.box}>
                <div className="main">
                    <Timeline />   
                </div>
            </div>
            <div className="main">
                <Student />
            </div>
        </Fragment>
    )
}

const styles = {
    main: {
        lineHeight:'2px'
    },
    box: {
        background:'#fff2df'
    }
}

export default Home