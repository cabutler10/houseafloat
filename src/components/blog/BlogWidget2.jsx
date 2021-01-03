import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import PlaceholderImg from "../../assets/shopCategory/surfer-at-eisbach.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    flexBasis: "100%",
    display: "flex",
    height: 350,
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
      height: 300,
    },
    [theme.breakpoints.up("lg")]: {
      height: 400,
    },
  },
  flexItem: {
    flexBasis: "50%",
  },
  header: {
    textAlign: "center",
    fontFamily: "secondary",
    width: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  content: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      padding: 75,
    },
  },
  background0: {
    background: theme.color.black,
  },
  background1: {
    background: theme.color.greenDk,
  },
  background2: {
    background: theme.color.yellowDk,
  },
  background3: {
    background: theme.color.black,
  },
  tag: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: 700,
    margin: 0,
    marginBottom: 5,
  },
  link: {
    color: theme.color.white,
    fontWeight: 700,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
  text: {
    color: theme.color.white,
    marginTop: 5,
    [theme.breakpoints.up("md")]: {
      marginTop: 25,
    },
  },
  link2: {
    color: theme.color.black,
    fontWeight: 700,
    fontSize: 18,
  },
  text2: {
    color: theme.color.black,
    [theme.breakpoints.up("md")]: {
      marginTop: 25,
    },
  },
}))

const BlogWidget2 = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 4
        filter: { frontmatter: { label: { in: "article" } } }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              tags
              featuredImageSmall {
                childImageSharp {
                  fluid(maxWidth: 400) {
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
      }
    }
  `)

  return (
    <div className={classes.root}>
      {data.allMdx.edges.map((elem, idx) => (
        <Fragment key={`blogPreview${idx}`}>
          <Hidden mdUp>
            {idx < 2 && (
              <div className={classes.container}>
                {idx === 0 && (
                  <div className={classes.flexItem}>
                    {elem.node.frontmatter.featuredImageSmall ? (
                      <Img
                        fluid={
                          elem.node.frontmatter.featuredImageSmall
                            .childImageSharp.fluid
                        }
                        alt={elem.path}
                        placeholderStyle={{ backgroundColor: `lightgray` }}
                        className={classes.img}
                        imgStyle={{ objectPosition: "center center" }}
                      />
                    ) : (
                      <img
                        src={PlaceholderImg}
                        alt="surfer at eisbach"
                        className={classes.img}
                      />
                    )}
                  </div>
                )}

                <div
                  className={clsx(classes.flexItem, classes.content, {
                    [classes[`background${idx}`]]: idx !== undefined,
                  })}
                >
                  <div className={classes.innerContent}>
                    <p className={classes.tag}>
                      {elem.node.frontmatter.tags[0]}
                    </p>
                    <Link
                      to={elem.node.fields.slug}
                      className={idx === 2 ? classes.link2 : classes.link}
                    >
                      {elem.node.frontmatter.title}
                    </Link>
                    <p className={idx === 2 ? classes.text2 : classes.text}>
                      {elem.node.excerpt}
                    </p>
                  </div>
                </div>

                {idx === 1 && (
                  <div className={classes.flexItem}>
                    {elem.node.frontmatter.featuredImageSmall ? (
                      <Img
                        fluid={
                          elem.node.frontmatter.featuredImageSmall
                            .childImageSharp.fluid
                        }
                        alt={elem.path}
                        placeholderStyle={{ backgroundColor: `lightgray` }}
                        className={classes.img}
                        imgStyle={{ objectPosition: "center center" }}
                      />
                    ) : (
                      <img
                        src={PlaceholderImg}
                        alt="surfer at eisbach"
                        className={classes.img}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </Hidden>
          <Hidden smDown>
            <div className={classes.container} key={`blogPreview${idx}`}>
              {idx > 1 && (
                <div className={classes.flexItem}>
                  {elem.node.frontmatter.featuredImageSmall ? (
                    <Img
                      fluid={
                        elem.node.frontmatter.featuredImageSmall.childImageSharp
                          .fluid
                      }
                      alt={elem.path}
                      placeholderStyle={{ backgroundColor: `lightgray` }}
                      className={classes.img}
                      imgStyle={{ objectPosition: "center center" }}
                    />
                  ) : (
                    <img
                      src={PlaceholderImg}
                      alt="surfer at eisbach"
                      className={classes.img}
                    />
                  )}
                </div>
              )}
              <div
                className={clsx(classes.flexItem, classes.content, {
                  [classes[`background${idx}`]]: idx !== undefined,
                })}
              >
                <div className={classes.innerContent}>
                  <p className={classes.tag}>{elem.node.frontmatter.tags[0]}</p>
                  <Link
                    to={elem.node.fields.slug}
                    className={idx === 2 ? classes.link2 : classes.link}
                  >
                    {elem.node.frontmatter.title}
                  </Link>
                  <p className={idx === 2 ? classes.text2 : classes.text}>
                    {elem.node.excerpt}
                  </p>
                </div>
              </div>
              {idx < 2 && (
                <div className={classes.flexItem}>
                  {elem.node.frontmatter.featuredImageSmall ? (
                    <Img
                      fluid={
                        elem.node.frontmatter.featuredImageSmall.childImageSharp
                          .fluid
                      }
                      alt={elem.path}
                      placeholderStyle={{ backgroundColor: `lightgray` }}
                      className={classes.img}
                      imgStyle={{ objectPosition: "center center" }}
                    />
                  ) : (
                    <img
                      src={PlaceholderImg}
                      alt="surfer at eisbach"
                      className={classes.img}
                    />
                  )}
                </div>
              )}
            </div>
          </Hidden>
        </Fragment>
      ))}
    </div>
  )
}

export default BlogWidget2
