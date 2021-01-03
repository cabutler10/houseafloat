import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import placeholder from "../../assets/websiteImages/blogPlaceholder.jpg"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15,
    [theme.breakpoints.up("lg")]: {
      marginBottom: 20,
    },
  },
  img: {
    height: 70,
    width: 70,
  },
  flexItem: {
    flexBasis: "70%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "65%",
    },
    [theme.breakpoints.up("xl")]: {
      flexBasis: "70%",
    },
  },
  tag: {
    textTransform: "uppercase",
    marginBottom: 5,
    marginTop: 0,
    fontSize: 11,
    fontWeight: 700,
    color: theme.palette.primary.dark,
  },
  link: {
    textTransform: "capitalize",
    color: theme.color.black,
    fontSize: 12,
    [theme.breakpoints.up("lg")]: {
      fontSize: 14,
    },
  },
  hr: {
    borderBottom: `1px solid ${theme.color.gray}`,
    width: "80%",
    textAlign: "center",
    margin: "0 auto 20px auto",
  },
}))

export default function BlogPreview({ post, idx }) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <Img
          alt={post.node.frontmatter.title}
          fluid={
            post.node.frontmatter.featuredImageSmall
              ? post.node.frontmatter.featuredImageSmall.childImageSharp.fluid
              : placeholder
          }
          className={classes.img}
        />
        <div className={classes.flexItem}>
          <p className={classes.tag}>
            {post.node.frontmatter.tags ? post.node.frontmatter.tags[0] : ""}
          </p>
          <Link to={`${post.node.fields.slug}`} className={classes.link}>
            {post.node.frontmatter.title}
          </Link>
        </div>
      </div>
      {idx !== 2 && <div className={classes.hr} />}
    </>
  )
}
