import * as React from "react"
import Layout from "../components/layout"
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const IndexPage = () => {
  const [isHero, setIsHero] = useState(true)
  return (
    <Layout isArticle={false} isHero={isHero}>
      <div className="hero-container">
                <div className="hero-container-sub">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <h1>Data Driven Recruitment</h1>
                                    <h3>Osiris Resources is an <span>expert consultancy delivering global hiring programs</span> for clients in the <span>Telecommunication</span> and <span>Computer Networking</span> space.</h3>
                                    <div className="hero-cta">
                                        <a className="btn" href="#">Find Out More</a>
                                        <a className="btn hero-btn-last" href="">Register Interest</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-image">
                                    <div className="hero-image-container">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
    </Layout>
  )
}

export default IndexPage
