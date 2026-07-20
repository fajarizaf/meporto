import React, { Fragment } from "react"
import CardBio from "./components/CardBio"
import Slide from "./components/Slide"
import Student from "./components/Student"
import Timeline from "./components/Timelines"

function Home() {
    return(
        <Fragment>
            <Slide />
            <div className="main" style={styles.content}>
                <CardBio />
                <Timeline />
                <Student />
            </div>
        </Fragment>
    )
}

const styles = {
    content: {
        paddingTop: '40px',
        paddingBottom: '80px'
    }
}

export default Home
