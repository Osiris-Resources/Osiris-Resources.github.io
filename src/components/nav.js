import * as React from 'react'
import { Link } from 'gatsby'
import OsirisLogo from '../images/Osiris_Resources_Logo.svg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import {
    faEarthEurope,
    faEarthAmericas,
  } from '@fortawesome/free-solid-svg-icons'

const toggleNav = (e, setShowCollapsedNav, showCollapsedNav) => {
    e.preventDefault()
    setShowCollapsedNav(!showCollapsedNav)
}

const Nav = ({simpleNav, isHero, scrollTo}) => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-xl navbar-dark ${isHero ? "menu-scrolling-hero" : "menu-scrolling-content"}`}>
                <div className="me-auto tog-container">
                    <Link className="navbar-brand" to="/">
                        <img src={OsirisLogo} alt="Osiris Resources Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={(e) => toggleNav(e, setShowCollapsedNav, showCollapsedNav )} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className={`collapse navbar-collapse nav-collapse ${showCollapsedNav ? "show" : ""}`} id="navbarCollapse">
                    {!simpleNav ? <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "about")}>About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "services")}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "team")}>Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "globalFootprint")}>Global Footprint</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "osirisAi")}>Osiris AI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)" onClick={(e) => scrollTo(e, "contact")}>Contact Us</a>
                        </li>
                        <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        {/* <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthAmericas} /> +44 (0) 117 941 0523</a>
                        </li> */}
                        <li className="nav-item nav-only">
                            <div className="nav-social">
                                {/* <a href="/">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a> */}
                                <a href="https://www.linkedin.com/company/osiris-resources-consultancy/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://twitter.com/osirisresource" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </a>
                            </div>
                        </li>
                    </ul> : 
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>}
                </div>  
            </nav>
            {/* Top Nav */}
            <nav className={`navbar fixed-top navbar-expand-xl navbar-dark ${isHero ? "top-menu-scrolling-hero" : "top-menu-scrolling-content"}`}>
                <div className="me-auto tog-container">
                    <div className="nav-social">
                        {/* <a href="/">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a> */}
                        <a href="https://www.linkedin.com/company/osiris-resources-consultancy/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://twitter.com/osirisresource" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </div>
                </div>
                <div>
                    <ul className="navbar-nav ms-auto nav-contact">
                        <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthAmericas} /> +44 (0) 117 941 0523</a>
                        </li> */}
                    </ul>
                </div>  
            </nav>
        </>
    )
}

export default Nav