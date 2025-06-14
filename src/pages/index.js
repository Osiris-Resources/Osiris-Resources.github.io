import * as React from "react"
import Layout from "../components/layout"
import { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import SectorsSection from "../components/sectors"
import TeamSection from "../components/team"
import FootprintSection from "../components/footprint"
import CtaSection from "../components/cta"
import ContactSection from "../components/contact"
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
import Retain from "../images/retain"
import CaseStudy from "../images/casestudy"
import Hiring from "../images/hiring"

const scrollTo = (e, sectionName) => {
    const section = document.getElementById(sectionName)
    e.preventDefault()
    section && section.scrollIntoView({ behavior: "smooth", block: "start" })
}

const highlightAnimation = (isActiveSection, highlightId) => {
    const highlight = document.getElementById(highlightId)
    highlight.classList.toggle("animate-highlight")
}

const lineAnimation = (isActiveProfile, lineOneId, lineTwoId, animationTypeOne, animationTypeTwo) => {
    const lineOne = document.getElementById(lineOneId)
    const lineTwo = document.getElementById(lineTwoId)
    lineOne.classList.toggle(animationTypeOne)
    lineTwo.classList.toggle(animationTypeTwo)
}

const numberAnimation = (isActiveSection, numberId) => {
    const numberEl = document.getElementById(numberId)
    numberEl.classList.toggle("animate-number")
}

const useWndowWidth = () => {
    const [windowWidth, setWindowWidth] = useState('undefined')
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (windowWidth !== typeof 'undefined' ? windowWidth : 0)
}


const IndexPage = () => {
  const [isHero, setIsHero] = useState(false)
  return (
    <Layout isArticle={false} isHero={isHero} scrollTo={scrollTo}>
        <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)}>
            <div className="hero-container">
                <div className="hero-container-sub">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-2">
                                <div className="hero-image">
                                    <div className="hero-image-container">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="hero-content">
                                    <h1>Data Driven Recruitment</h1>
                                    <h3>Osiris Resources is an <span>expert consultancy delivering global hiring programs</span> which cover projects in three cutting edge technology areas. <span>Artifical Intelligence (AI)</span>, <span>Telecommunication</span> and <span>Quantum Computing</span>.</h3>
                                    <div className="hero-cta">
                                        <a className="btn" href="javascript:void(0)" onClick={(e) => scrollTo(e, "about")}>Find Out More</a>
                                        <a className="btn hero-btn-last" href="https://docs.google.com/forms/d/e/1FAIpQLSdkPeYj4JstQt2cAG3fwn9ImuaBSOgSBcAF0Tf64w8Nrmk7LQ/viewform?usp=sf_link" target="_blank" rel="noreferrer">Register Interest</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <video autoPlay muted loop id="bgVideo">
                    <source src="Osiris_Video.mp4" type="video/mp4" />
                </video>
            </div>
        </Waypoint>
        <div className="partners">
            <div className="container-fluid">
                <div className="row partner-box-container">
                    <div className="partner-box">
                        <h6>Alef Inc</h6>
                    </div>
                    <div className="partner-box">
                        <h6>Arista Networks</h6>
                    </div>
                    <div className="partner-box">
                        <h6>Blu Wireless</h6>
                    </div>
                    <div className="partner-box">
                        <h6>Docker</h6>
                    </div>
                    <div className="partner-box">
                        <h6>NetMinded</h6>
                    </div>
                    <div className="partner-box">
                        <h6>University of Bristol</h6>
                    </div>
                    <div className="partner-box">
                        <h6>University of Surrey</h6>
                    </div>
                    <div className="partner-box">
                        <h6>Veea Systems</h6>
                    </div>
                </div>
            </div>
        </div>
        <div id="about" className="about-container">
            <Waypoint onEnter={() => highlightAnimation(true, "highlight")} onLeave={() => highlightAnimation(false, "highlight")}>
                <div className="about-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="highlight-heading"><span id="highlight"></span>About Us</h2>
                                <p className="text-accent">Osiris is an industry specific recruitment consultancy that supports and delivers high level recruitment partnership programmes and third party assistance. We have spent multiple years focusing solely on roles within the Telecoms / Computer Networking Industry.</p>
                                <hr className="divider-small"></hr>
                                <p>What does industry specific mean? SDN / NFV, Containerisation OS systems / Virtualization, Edge Computing / Cloud Computing (Platforms with API capability) and 5G / mmWave / RAN / Backhaul technology.
                                    We understand our technology space, the demographic of talent within our market and regularly deliver in what can be a challenging space to hire effectively and quickly.  We are confident we can drive the CAPEX and OPEX of your hiring programs down.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
            <SectorsSection lineAnimation={lineAnimation} useWndowWidth={useWndowWidth} />
        </div>
        <div id="services" className="services-container">
            <Waypoint onEnter={() => highlightAnimation(true, "highlightServices")} onLeave={() => highlightAnimation(false, "highlightServices")}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="highlight-heading"><span id="highlightServices"></span>Services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Waypoint onEnter={() => numberAnimation(true, "Green_Accent_One")} onLeave={() => numberAnimation(false, "Green_Accent_One")}>
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
                        <Waypoint onEnter={() => numberAnimation(true, "Green_Accent_Two")} onLeave={() => numberAnimation(false, "Green_Accent_Two")}>
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
                        <Waypoint onEnter={() => numberAnimation(true, "Green_Accent_Three")} onLeave={() => numberAnimation(false, "Green_Accent_Three")}>
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
        <TeamSection lineAnimation={lineAnimation} useWndowWidth={useWndowWidth} />
        <FootprintSection highlightAnimation={highlightAnimation} />
        <CtaSection highlightAnimation={highlightAnimation} />
        <ContactSection highlightAnimation={highlightAnimation} />
    </Layout>
  )
}

export default IndexPage
