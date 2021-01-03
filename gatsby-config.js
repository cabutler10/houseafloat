module.exports = {
  siteMetadata: {
    title: "House Afloat",
    titleTemplate: "",
    description: "Lifestyle Page for House Boats",
    url: "https://www.houseafloat.com", // No trailing slash allowed!
    siteUrl: "https://www.houseafloat.com",
    image: "/src/assets/logos/logo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/logos`,
        name: `logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/websiteImages`,
        name: `websiteImages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shopCategory`,
        path: `${__dirname}/src/assets/shopCategory`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-wordpress-experimental",
    //   options: {
    //     url: `https://secondwavesurfing.com/shop/graphql`,
    //     schema: {
    //       requestConcurrency: 1, // currently set to undefined
    //       previewRequestConcurrency: 1, // currently set to undefined
    //       timeout: 100000,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `45081008167`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: "UA-168058937-1", // leave empty if you want to disable the tracker
    //       anonymize: true, // default
    //     },
    //     googleTagManager: {
    //       trackingId: "", // leave empty if you want to disable the tracker
    //       dataLayerName: "dataLayer", // default
    //     },
    //     facebookPixel: {
    //       pixelId: "", // leave empty if you want to disable the tracker
    //     },
    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ["production"],
    //   },
    // },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `House Afloat`,
        short_name: `HouseAfloat`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FEF9C7`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/logos/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Raleway`,
                variants: [`300`, `400`, `500`],
              },
              {
                family: `Amatic SC`,
                variants: [`400`, `700`],
              },
            ],
          },
        },
      },
    },
  ],
}
