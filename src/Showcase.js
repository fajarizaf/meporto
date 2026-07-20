import React, { Fragment } from "react"
import CardPorto from "./components/CardPorto"

function Showcase() {
    return(
        <Fragment>
            <div className="slide" style={styles.slide}> 
                <div style={styles.inner}>
                    <span style={styles.label}>Portfolio</span>
                    <h2 className="font-1" style={styles.hi}>
                        Showcase
                    </h2>
                    <p style={styles.sub}>Projects I've built and contributed to</p>
                </div>
            </div>
            <div className="main" style={styles.cardsWrap}>
                <CardPorto />
            </div>
        </Fragment>
    )
}

const styles = {
    slide: {
        minHeight: 'auto',
        alignItems: 'center',
        padding: '60px 40px 40px',
    },
    inner: {
        textAlign: 'center',
        width: '100%'
    },
    cardsWrap: {
        paddingTop: '10px',
        paddingBottom: '80px'
    },
    label: {
        display: 'inline-block',
        fontSize: '11px',
        fontWeight: '600',
        color: 'var(--accent-3)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '12px',
        padding: '5px 12px',
        background: 'var(--accent-3-subtle)',
        border: '1px solid rgba(192, 132, 252, 0.2)',
        borderRadius: '20px'
    },
    hi: {
        color: 'var(--text-primary)',
        fontSize: '2rem',
        marginBottom: '8px',
        fontFamily: "'Space Grotesk', sans-serif"
    },
    sub: {
        color: 'var(--text-secondary)',
        fontSize: '15px',
        margin: 0
    }
}

export default Showcase
