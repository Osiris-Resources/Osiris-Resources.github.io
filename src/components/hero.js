import * as React from 'react';
import { Waypoint } from 'react-waypoint';

const HeroSection = ({setIsHero, scrollTo}) => {
    return (
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
    )
}

export default HeroSection;