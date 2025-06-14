import * as React from 'react';
import { Waypoint } from 'react-waypoint';
import Retain from '../images/retain';
import CaseStudy from '../images/casestudy';
import Hiring from '../images/hiring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheck,
    faGlobe,
    faBuilding,
    faMoneyCheckDollar,
    faMicrochip,
    faPersonCircleCheck,
    faFlagUsa,
  } from '@fortawesome/free-solid-svg-icons'

const ServicesSection = ({ highlightAnimation, numberAnimation }) => {
    return (
        <div id="services" className="services-container">
            <Waypoint onEnter={() => highlightAnimation("highlightServices")} onLeave={() => highlightAnimation("highlightServices")}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="highlight-heading"><span id="highlightServices"></span>Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Waypoint onEnter={() => numberAnimation("Green_Accent_One")} onLeave={() => numberAnimation("Green_Accent_One")}>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-number">
                                        <Retain />
                                    </span>
                                    <h6>Retain Us</h6>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Data driven recruitment</p>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Monthly contracted hiring resources</p>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Pipeline building and account management services</p>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Successful LinkedIn campaigns</p>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={() => numberAnimation("Green_Accent_Two")} onLeave={() => numberAnimation("Green_Accent_Two")}>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-number">
                                        <CaseStudy />
                                    </span>
                                    <h6>Volta Networks Case Study</h6>
                                    <p><span><FontAwesomeIcon icon={faGlobe} /></span>2019: 38 staff hired across 4 locations in 12 months - USA, Spain, Japan and UK</p>
                                    <p><span><FontAwesomeIcon icon={faBuilding} /></span>Company entities created in the UK and an office in Madrid created in that time</p>
                                    <p><span><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>Company is now formerly known as IBM after acquisition</p>
                                    <br/>
                                    <h6>Alef Inc Case Study</h6>
                                    <p><span><FontAwesomeIcon icon={faMicrochip} /></span>2022: 20 requirements to build a EMEA Engineering team in Spain and sales organisation in the USA</p>
                                    <p><span><FontAwesomeIcon icon={faPersonCircleCheck} /></span>On track to deliver 15 headcount in the engineering team by late 2022</p>
                                    <p><span><FontAwesomeIcon icon={faFlagUsa} /></span>Building a product development team in the USA</p>
                                </div>
                            </div>
                        </Waypoint>
                        <Waypoint onEnter={() => numberAnimation("Green_Accent_Three")} onLeave={() => numberAnimation("Green_Accent_Three")}>
                            <div className="col-lg-4">
                                <div className="services-panel">
                                    <span className="panel-number">
                                        <Hiring />
                                    </span>
                                    <h6>Permanent & Contract Hiring Solutions</h6>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Third party hiring model</p>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Contract with agreed fees, terms & conditions</p>
                                    <p><span><FontAwesomeIcon icon={faCheck} /></span>Bespoke database with large number of skilled contractors for hire</p>
                                </div>
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </Waypoint>
        </div>
    )
}

export default ServicesSection;