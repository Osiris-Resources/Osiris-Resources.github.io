import * as React from 'react'
import { Waypoint } from 'react-waypoint'
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

const ContactSection = ({highlightAnimation}) => {
    return(
        <div id="contact" className="contact-container">
            <Waypoint onEnter={() => highlightAnimation(true, "highlightContact")} onLeave={() => highlightAnimation(false, "highlightContact")}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="highlight-heading"><span id="highlightContact"></span>Contact Us</h2>
                        </div>
                    </div>
                    <div className="row contact-info-main">
                        <div className="col-md-4">
                            <a href="mailto:info@osirisresources.com"><h5>info[@]osirisresources.com</h5></a>
                        </div>
                        <div className="col-md-4 text-center social-footer">
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
                        <div className="col-md-4 text-end">
                            <a className="btn btn-content" href="mailto:info@osirisresources.com">Send Us A Message</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <hr className="divider-long"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="address-container">
                                <a href="tel:+441179410523"><h5><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</h5></a>
                                <h6 className="mt-4">Osiris Resources</h6>
                                <h6>Bristol</h6>
                                <h6>United Kingdom</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address-container">
                                <a href="tel:+441179410523"><h5><FontAwesomeIcon icon={faEarthEurope} /> +44 (0) 117 941 0523</h5></a>
                                <h6 className="mt-4">Osiris Resources</h6>
                                <h6>Barcelona</h6>
                                <h6>España</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address-container">
                                <a href="tel:+441179410523"><h5><FontAwesomeIcon icon={faEarthAmericas} /> +44 (0) 117 941 0523</h5></a>
                                <h6 className="mt-4">Osiris Resources</h6>
                                <h6>New York</h6>
                                <h6>United States</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Waypoint>
        </div>
    )
}

export default ContactSection