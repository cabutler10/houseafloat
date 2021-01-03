import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/styles"
import Container from "../ui/Container"
import logo from "../../assets/logos/logo.png"

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
  },
  h1: {
    marginBottom: 30,
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  item: {
    flexBasis: "100%",
    textAlign: "center",
    marginBottom: 30,
    background: theme.color.black,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      marginBottom: 45,
    },
  },
  img: {
    height: 400,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 270,
    },
    [theme.breakpoints.up("md")]: {
      height: 370,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
  text: {
    fontSize: 14,
    color: theme.color.white,
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
      flexBasis: "49%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 32,
    },
  },
}))

function LinkTree() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      blog: file(relativePath: { eq: "blogPlaceholder.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const links = [
    {
      title: "Blog",
      img: "blog",
      link: "https://houseAfloat.com/blog/",
    },
  ]

  return (
    <Container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <img src={logo} alt="logo" className={classes.logo}></img>
      <h1 className={classes.h1}>Second Wave Surfing</h1>
      <div className={classes.container}>
        {links.map((elem, idx) => (
          <div className={classes.item} key={`link${idx}`}>
            <a href={elem.link} target="_blank" rel="noopener">
              <Img
                fluid={data[elem.img].childImageSharp.fluid}
                alt={elem.title}
                placeholderStyle={{ backgroundColor: `white` }}
                className={classes.img}
                imgStyle={{ objectPosition: "center center" }}
              />
              <p className={classes.text}>{elem.title}</p>
            </a>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default LinkTree
