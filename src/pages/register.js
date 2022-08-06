import * as React from "react"
import Layout from "../components/layout"
import ContactSection from "../components/contact"

const highlightAnimation = (isActiveSection, highlightId) => {
    const highlight = document.getElementById(`${highlightId}`)
    isActiveSection ? highlight.classList.add("animate-highlight") : highlight.classList.remove("animate-highlight")
}

const RegisterPage = () => {
    return(
        <Layout isArticle={false} isHero={false} simpleNav={true}>
            <div className="container register-container">
                <div className="form-container">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkPeYj4JstQt2cAG3fwn9ImuaBSOgSBcAF0Tf64w8Nrmk7LQ/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
            <ContactSection highlightAnimation={highlightAnimation} />
        </Layout>
    )
}

export default RegisterPage