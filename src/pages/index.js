import * as React from "react"
import Layout from "../components/layout"
import { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import { StaticImage } from 'gatsby-plugin-image'
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
    const section = document.getElementById(`${sectionName}`)
    e.preventDefault()
    section && section.scrollIntoView({ behavior: "smooth", block: "start" })
}

const highlightAnimation = (isActiveSection, highlightId) => {
    const highlight = document.getElementById(`${highlightId}`)
    isActiveSection ? highlight.classList.add("animate-highlight") : highlight.classList.remove("animate-highlight")
}

const lineAnimation = (isActiveProfile, lineOneId, lineTwoId, animationTypeOne, animationTypeTwo) => {
    const lineOne = document.getElementById(`${lineOneId}`)
    const lineTwo = document.getElementById(`${lineTwoId}`)
    isActiveProfile ? lineOne.classList.add(`${animationTypeOne}`) : lineOne.classList.remove(`${animationTypeOne}`)
    isActiveProfile ? lineTwo.classList.add(`${animationTypeTwo}`) : lineTwo.classList.remove(`${animationTypeTwo}`)
}

const numberAnimation = (isActiveSection, numberId) => {
    const numberEl = document.getElementById(`${numberId}`)
    isActiveSection ? numberEl.classList.add("animate-number") : numberEl.classList.remove("animate-number")
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
                                    <h3>Osiris Resources is an <span>expert consultancy delivering global hiring programs</span> that covers projects in three cutting edge technology areas. <span>Artifical Intelligence (AI)</span>, <span>Telecommunication</span> and <span>Quantum Computing</span>.</h3>
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
            <div className="about-profiles">
                <div className="container">
                    <Waypoint onEnter={() => lineAnimation(true, "lineHorizontal", "lineVertical", "line-animation-l", "line-animation-r")} onLeave={() => lineAnimation(false, "lineHorizontal", "lineVertical", "line-animation-l", "line-animation-r")} bottomOffset={useWndowWidth() > 767.20 ? 80 : 0}>
                        <div className="row mb-5">
                            <div className="col-md-4">
                                <div className="profile-first">
                                    <StaticImage src="../images/James_Hill_img.png" alt="James Hill - Osiris Resources" />
                                    <span id="lineHorizontal" className="accent-line line-horizontal"></span>
                                    <span id="lineVertical" className="accent-line line-vertical"></span>
                                </div>
                            </div>
                            <div className="col-md-8 profile-text">
                                <div className="profile-text-container ms-5">
                                    <h5>James Hill</h5>
                                    <h6 className="mb-5">Director</h6>
                                    <p>Osiris Resources was started by James who recognised the need for an expert consultancy in a growingly saturated and niche market. James has worked directly for SME’s and large corporations delivering talent solutions for the Telco market and also has experience delivering business operations and running enterprise sales programmes.</p>
                                    <p>He is passionate about maintaining and building further an already existing ecosystem in the Telecoms and Computer Networking industry.</p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                    {/* <Waypoint onEnter={() => lineAnimation(true, "lineLeft", "lineRight", "line-animation-l", "line-animation-r")} onLeave={() => lineAnimation(false, "lineLeft", "lineRight", "line-animation-l", "line-animation-r")} bottomOffset={useWndowWidth() > 767.20 ? 150 : 0}>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-4 order-md-2">
                                <div className="profile-middle">
                                    <StaticImage src="../images/_img.png" alt="- Osiris Resources" />
                                    <span id="lineLeft" className="accent-line line-left"></span>
                                    <span id="lineRight" className="accent-line line-right"></span>
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1 profile-text">
                                <div className="profile-text-container me-5">
                                    <h5></h5>
                                    <h6 className="mb-5"></h6>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </Waypoint> */}
                    <Waypoint onEnter={() => lineAnimation(true, "lineHorizontalLast", "lineVerticalLast", "line-animation-r", "line-animation-l")} onLeave={() => lineAnimation(false, "lineHorizontalLast", "lineVerticalLast", "line-animation-r", "line-animation-l")} bottomOffset={useWndowWidth() > 767.20 ? 150 : 0}>
                        <div className="row mt-5">
                            <div className="col-md-4 order-md-2">
                                <div className="profile-last">
                                    <StaticImage src="../images/Nick_Randall_img.png" alt="Nick Randall - Osiris Resources" />
                                    <span id="lineHorizontalLast" className="accent-line line-horizontal-last"></span>
                                    <span id="lineVerticalLast" className="accent-line line-vertical-last"></span>
                                </div>
                            </div>
                            <div className="col-md-8 order-md-1 profile-text">
                                <div className="profile-text-container ms-5">
                                    <h5>Nick Randall</h5>
                                    <h6 className="mb-5">Non Exec Director</h6>
                                    <p>Nick advises Osiris Resources, helping us with mentoring, coaching and general business management. He is CEO of NetMinded, a Bristol-based Networking start-up. Osiris Resources enjoys working with innovative companies such as NetMinded.</p>
                                    <p>Our passion is supporting and championing the general Telco / Networking ecosystem. It is this passion and experience that makes us different. </p>
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </div>
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
        <FootprintSection highlightAnimation={highlightAnimation} />
        <CtaSection highlightAnimation={highlightAnimation} />
        <ContactSection highlightAnimation={highlightAnimation} />
    </Layout>
  )
}

export default IndexPage
