import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import SEO from './seo'
// import CookieBanner from './cookies'

const Layout = ({ title, description, keywords, image, simpleNav, isHero, children }) => {
  return (
    <>
      <SEO title={title} description={description} image={image} keywords={keywords} />
      <Nav simpleNav={simpleNav} isHero={isHero} />
      <main>
        {children}
        <Footer />
      </main>
      {/* <CookieBanner /> */}
    </>
  )
}
export default Layout