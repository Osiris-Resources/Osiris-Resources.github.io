import * as React from "react"
import Layout from "../components/layout"

const Cookies = () => {
    return (
        <Layout title="Cookies Policy" isArticle={false} isHero={false} simpleNav={true}>
            <div className="container mt-5 mb-5 cookies-container">
                <div className="row mt-5 mb-5">
                    <div className="col-12 mt-5 mb-5">
                        <h1 className="text-center mt-5">Cookies Policy</h1>
                        <br/>
                        <p>Osiris Resources uses small files which help the site to function and help to collect information about how you browse and navigate the site. These files are saved to your device and are known as (‘cookies’). <a href="AllAboutCookies.org" target="_blank" rel="noreferrer">AllAboutCookies.org</a> is a great place to learn more about what exactly cookies are.</p>
                        <h2 className="mt-5 mb-3">Osiris Resources uses cookies:</h2>
                        <p>To store website session information.</p>
                        <p>To obtain analytical information about how you use the site through the third party Google Analytics, allowing for changes and improvements to be made based upon browsing activity.</p>
                        <p>To remember your preference in response to a cookie notice that is displayed to you.</p>
                        <h2 className="mt-5 mb-3">The cookies used in conjunction with Google Analytics allow for the following information to be collected:</h2>
                        <ul>
                            <li>How you got to the site, for example from a Google search or from a link on another site.</li>
                            <li>What type of browser and device you are using to view the site.</li>
                            <li>What location you viewed the site from, such as country, state, city or town, but not your address.</li>
                            <li>What pages you visit on the site.</li>
                            <li>What features of the site you interact with.</li>
                            <li>Whether it is the first time you have visited the site or if you are a returning visitor.</li>
                        </ul>
                        <p>The following is a list of cookies that Osiris Resources uses, depending upon how you use the site not all listed cookies may be downloaded at any one time. The list is provided so that you can make an informed decision on whether you want to opt-out of cookies or not by adjusting your browser settings. You can manage, block and delete cookies from your device browser.</p>
                        <h2 className="mt-5 mb-3">Essential Cookies</h2>
                        <h3 className="mt-5 mb-3">Session Storage Cookie</h3>
                        <p>This cookie stores things such as your scroll position on a page.</p>
                        <p>osirisresources.com Expires When Session Ends</p>
                        <p>gatsby-gdpr-google-analytics Expires 90 Days</p>
                        <h3 className="mt-5 mb-3">Cookie Consent</h3>
                        <p>This cookie is used to remember your preference for non-essential cookies.</p>
                        <p>gatsby-gdpr-google-analytics Expires 90 Days</p>
                        <h2 className="mt-5 mb-3">Non-Essential Cookies</h2>
                        <h3 className="mt-5 mb-3">Google Analytics Cookies</h3>
                        <p>These cookies are used to record which pages and content on the site you use, and enables Osiris Resources to monitor statistics and data to make sure users are getting the most out of the site.</p>
                        <p>Name _ga – Expires 2 Years</p>
                        <p>Name _gat – Expires 10 Minutes</p>
                        <p>Name _gid – Expires 1 Day</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cookies