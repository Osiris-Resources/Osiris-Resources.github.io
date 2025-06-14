import * as React from 'react';
import { Waypoint } from 'react-waypoint';
import SectorsSection from './sectors';

const AboutSection = ({highlightAnimation, floatAnimation, useWndowWidth}) => {
    return (
        <div id="about" className="about-container">
            <Waypoint onEnter={() => highlightAnimation("highlight")} onLeave={() => highlightAnimation("highlight")}>
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="highlight-heading"><span id="highlight"></span>About Us</h2>
                                <p className="text-accent">Osiris Resources is an expert consultancy delivering global hiring programs which cover projects in three cutting edge technology areas. Artifical Intelligence (AI), Telecommunication and Quantum Computing.</p>
                                <hr className="divider-small"></hr>
                                <p>What does industry specific mean? SDN / NFV, Containerisation OS systems / Virtualization, Edge Computing / Cloud Computing (Platforms with API capability) and 5G / mmWave / RAN / Backhaul technology.
                                    We understand our technology space, the demographic of talent within our market and regularly deliver in what can be a challenging space to hire effectively and quickly.  We are confident we can drive the CAPEX and OPEX of your hiring programs down.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
            <SectorsSection floatAnimation={floatAnimation} useWndowWidth={useWndowWidth} />
        </div>
    )
}

export default AboutSection;