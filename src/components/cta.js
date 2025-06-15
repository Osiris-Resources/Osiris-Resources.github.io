import * as React from 'react'
import { Waypoint } from 'react-waypoint'

const CtaSection = ({highlightAnimation}) => {
    return(
        <Waypoint onEnter={() => highlightAnimation("highlightCta")} onLeave={() => highlightAnimation("highlightCta")}>
            <div id="osirisAi" className="container platform-container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="highlight-heading"><span id="highlightCta"></span>Osiris AI - Coming Soon</h2>
                        <p className="text-accent mb-4 pb-2">Please register your interest for Osiris AI.</p>
                        <a className="btn btn-content" href="https://docs.google.com/forms/d/e/1FAIpQLSdkPeYj4JstQt2cAG3fwn9ImuaBSOgSBcAF0Tf64w8Nrmk7LQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Register Interest</a>
                    </div>
                </div>
            </div>
        </Waypoint>
    )
}

export default CtaSection