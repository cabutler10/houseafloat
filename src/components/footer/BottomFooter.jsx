import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby-theme-material-ui"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  copyrightContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    color: theme.color.white,
    paddingTop: 10,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0,
    },
  },
  textSmall: {
    color: theme.color.white,
    fontSize: 12,
    textTransform: "capitalize",
    letterSpacing: 2,
    fontWeight: 500,
    padding: "0 10px",
    width: "49%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },

  copyright: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Container
      justifyContent="spaceBetween"
      background="black"
      alignItems="center"
      padding="none"
    >
      <div className={classes.copyrightContainer}>
        <Link to="/imprint" className={clsx(classes.textSmall, classes.link)}>
          {t("links.imprint")}
        </Link>
        |
        <Link to="/credit" className={clsx(classes.textSmall, classes.link)}>
          {t("links.credit")}
        </Link>
      </div>
      <p className={clsx(classes.textSmall, classes.copyright)}>
        &copy; House Afloat
      </p>
    </Container>
  )
}

export default Footer
