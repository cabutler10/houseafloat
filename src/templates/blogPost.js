import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby-theme-material-ui"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Container from "../components/ui/Container"
import Sidebar from "../components/blog/Sidebar"

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },
  caption: {
    fontSize: 10,
    textAlign: "center",
    textTransform: "capitalize",
    marginBottom: 30,
    [theme.breakpoints.up("lg")]: {
      marginBottom: 60,
    },
  },
  featuredImg: {
    marginBottom: 30,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 60,
    },
  },
  nav: {
    width: "100%",
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: theme.color.black,
    background: theme.palette.primary.main,
    padding: "9px 27px",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 3,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      background: theme.palette.primary.light,
    },
  },
  marginLeft: {
    marginLeft: 15,
  },
  marginRight: {
    marginRight: 15,
  },
  img: {
    height: 300,
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
  },
  sub: {
    fontSize: 12,
    textAlign: "right",
    width: "100%",
  },
  a: {
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  blog: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "65%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "70%",
      overflow: "hidden",
    },
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "25%",
    },
  },
}))

export default function BlogPostTemplate({ data: { mdx }, pageContext }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const { previous, next } = pageContext

  const shortcodes = {
    Link,
    img: (props) => <img {...props} className={classes.img} />,
    sub: (props) => <sub {...props} className={classes.sub} />,
    a: (props) => <a {...props} className={classes.a} />,
  }

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <>
        <Container justifyContent="spaceBetween">
          <div className={classes.blog}>
            <article>
              <h1 className={classes.h1}>{mdx.frontmatter.title}</h1>
              <p className={classes.caption}>
                {t("blog.updated")} {mdx.frontmatter.date.split("T")[0]}
              </p>
              <Hidden smUp>
                <Img
                  alt={mdx.frontmatter.title}
                  fluid={
                    mdx.frontmatter.featuredImageSmall.childImageSharp.fluid
                  }
                  placeholderStyle={{ backgroundColor: `lightgray` }}
                  className={classes.featuredImg}
                />
              </Hidden>
              <Hidden smDown>
                <Img
                  alt={mdx.frontmatter.title}
                  fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid}
                  placeholderStyle={{ backgroundColor: `lightgray` }}
                  className={classes.featuredImg}
                />
              </Hidden>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </article>
          </div>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
        </Container>
        <Container>
          <nav className={classes.nav}>
            <ul className={classes.ul}>
              <li>
                {previous && (
                  <Link to={previous} rel="prev" className={classes.link}>
                    <ChevronLeftIcon className={classes.marginRight} />
                    {t("common.previous")}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next} rel="next" className={classes.link}>
                    {t("common.next")}
                    <ChevronRightIcon className={classes.marginLeft} />
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Container>
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        title
        date
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImageSmall {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
