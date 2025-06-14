import * as React from 'react';
import Globe from '../images/globe';
import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShoePrints,
    faScaleBalanced
  } from '@fortawesome/free-solid-svg-icons'

const FootprintSection = ({highlightAnimation}) => {
    return (
        <Waypoint onEnter={() => highlightAnimation(true, "highlightFootprint")} onLeave={() => highlightAnimation(false, "highlightFootprint")}>
            <div id="globalFootprint" className="footprint-container">
                <div className="footprint-container-sub">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="highlight-heading"><span id="highlightFootprint"></span>Global Footprint</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footprint-image">
                                    <div className="footprint-image-container">
                                        <Globe />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footprint-panel footprint-content">
                                    <p><span><FontAwesomeIcon icon={faShoePrints} /></span>US - We work directly with clients in Santa Clara, Silicon Valley and on the East Coast some of the coolest tech hubs such as Boston.</p>
                                    <p><span><FontAwesomeIcon icon={faShoePrints} /></span>Europe - This is where it all started for us and is our bread and butter.</p>
                                    <p><span><FontAwesomeIcon icon={faShoePrints} /></span>The Middle East - The most exciting current emerging tech hub globally. Our Director James has travelled far and wide in particular Saudi Arabia and UAE and we are very excited to watch this space as well as the rest of the world.</p>
                                    <p><span><FontAwesomeIcon icon={faShoePrints} /></span>APAC - We have covered very exciting projects in Japan, Singapore and Australia, every market is challenging but we know our industry well.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center footprint-panel footprint-panel-alt">
                                <p><span><FontAwesomeIcon icon={faScaleBalanced} /></span>Osiris can offer corporate legal advice to clients wishing to open up companies in Saudi and the Gulf.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Waypoint>
    )
}

export default FootprintSection;