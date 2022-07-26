module.exports = {
  siteMetadata: {
    title: `Osiris Resources | Data Driven Recruitment`,
    shortTitle: `Osiris Resources`,
    siteUrl: `https://osirisresources.com`,
    titleTemplate: `%s | Osiris Resources`,
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
                  `dosis\:400,600`
                ],
                display: 'swap'
              }
            },
            "gatsby-plugin-fontawesome-css",
        ]
};