import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  img: {
    flexBasis: "80%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
    },
  },

  tagline: {
    textTransform: "capitalize",
    fontWeight: "700",
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
    },
  },
  text: {
    marginBottom: 30,
  },
}))

function Brands() {
  const classes = useStyles()
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brands.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container
      alignItems="center"
      justifyContent="spaceAround"
      background="gray"
    >
      <Img
        fluid={data.image.childImageSharp.fluid}
        alt="brands"
        placeholderStyle={{ backgroundColor: `white` }}
        className={classes.img}
        imgStyle={{ objectPosition: "center center" }}
      />
      <div className={classes.flexItem}>
        <p className={classes.tagline}>{t("homepage.heroSubtitle")}</p>
        <p className={classes.text}>{t("homepage.about")}</p>
      </div>
    </Container>
  )
}

export default Brands
