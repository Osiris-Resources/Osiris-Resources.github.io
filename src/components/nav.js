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

const Nav = ({simpleNav, isHero}) => {
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
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/platform">Platform</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact Us</Link>
                        </li>
                        <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item nav-only">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthAmericas} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item nav-only">
                            <div className="nav-social">
                                <a href="/">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="/">
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
                        <a href="/">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </div>
                </div>
                <div>
                    <ul className="navbar-nav ms-auto nav-contact">
                        <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="tel:+441179410523"><FontAwesomeIcon icon={faEarthAmericas} /> +44 (0) 117 941 0523</a>
                        </li>
                    </ul>
                </div>  
            </nav>
        </>
    )
}

export default Nav