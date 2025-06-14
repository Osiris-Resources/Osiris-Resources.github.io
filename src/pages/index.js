import * as React from "react"
import Layout from "../components/layout"
import { useState, useEffect } from 'react'
import TeamSection from "../components/team"
import FootprintSection from "../components/footprint"
import CtaSection from "../components/cta"
import ContactSection from "../components/contact"
import PartnersSection from "../components/partners"
import HeroSection from "../components/hero"
import AboutSection from "../components/about"
import ServicesSection from "../components/services"

const scrollTo = (e, sectionName) => {
    const section = document.getElementById(sectionName)
    e.preventDefault()
    section && section.scrollIntoView({ behavior: "smooth", block: "start" })
}

const highlightAnimation = (highlightId) => {
    const highlight = document.getElementById(highlightId)
    highlight.classList.toggle("animate-highlight")
}

const floatAnimation = (elementId) => {
    const element = document.getElementById(elementId)
    element.classList.toggle("sectors-animation")
}

const lineAnimation = (lineOneId, lineTwoId, animationTypeOne, animationTypeTwo) => {
    const lineOne = document.getElementById(lineOneId)
    const lineTwo = document.getElementById(lineTwoId)
    lineOne.classList.toggle(animationTypeOne)
    lineTwo.classList.toggle(animationTypeTwo)
}

const numberAnimation = (numberId) => {
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
        <HeroSection setIsHero={setIsHero} scrollTo={scrollTo} />
        <PartnersSection />
        <AboutSection highlightAnimation={highlightAnimation} floatAnimation={floatAnimation} useWndowWidth={useWndowWidth} />
        <ServicesSection highlightAnimation={highlightAnimation} numberAnimation={numberAnimation} />
        <TeamSection lineAnimation={lineAnimation} useWndowWidth={useWndowWidth} />
        <FootprintSection highlightAnimation={highlightAnimation} />
        <CtaSection highlightAnimation={highlightAnimation} />
        <ContactSection highlightAnimation={highlightAnimation} />
    </Layout>
  )
}

export default IndexPage
