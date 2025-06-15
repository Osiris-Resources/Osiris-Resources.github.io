module.exports = {
  siteMetadata: {
    title: `Osiris Resources | Data Driven Recruitment`,
    shortTitle: `Osiris Resources`,
    siteUrl: `https://osirisresources.com`,
    titleTemplate: `%s | Osiris Resources`,
    description:
      `Osiris Resources is an expert consultancy delivering global hiring programs for clients in the Artificial Intelligence (AI), Telecommunications and Quantum Computing space.`,
    image: `/osiris-resources-og-image.jpg`,
    keywords: `Expert Consultancy,Consultancy,Recruitment,Hiring,AI, Artificial Intelligence,Telco,Telecommunications,Quantum Computing,Networking,Osiris Resources`,
    maskedIcon: `/safari-pinned-tab.svg`,
    socials: [
      {
        url: `https://facebook.com`,
      },
      {
        url: `https://www.linkedin.com/company/osiris-resources-consultancy/`,
      },
      {
        url: `https://twitter.com`,
      },
    ]
  },
  plugins: [ 
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `Osiris Resources`,
                short_name: `Osiris Resources`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                lang: `en`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: `query`,
              },
            },
            "gatsby-plugin-react-helmet", 
            "gatsby-plugin-sitemap", 
            "gatsby-plugin-image",
            "gatsby-plugin-sharp", 
            "gatsby-transformer-sharp", 
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                  "name": "images",
                  "path": "./src/images/"
                },
                __key: "images"
            },
            {
              resolve: `gatsby-plugin-google-fonts`,
              options: {
                fonts: [
                  `cabin\:400,600,700`,
                  `sora\:400,600`
                ],
                display: 'swap'
              }
            },
            "gatsby-plugin-fontawesome-css",
            {
              resolve: `gatsby-plugin-gdpr-cookies`,
              options: {
                googleAnalytics: {
                  trackingId: 'G-K9GYB1P67K',
                  cookieName: 'gatsby-gdpr-google-analytics',
                  anonymize: true,
                  allowAdFeatures: false
                },
                environments: ['production']
              },
            },
        ]
};