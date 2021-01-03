import React from "react"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import Container from "../ui/Container"
import BottomFooter from "./BottomFooter"
import logo from "../../assets/logos/logo.png"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.color.white,
  },
  container: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: 16,
    letterSpacing: 3,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  text: {
    textTransform: "capitalize",
    color: theme.color.black,
    letterSpacing: 2,
    marginBottom: 15,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: 150,
    marginBottom: 30,
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    margin: "0 15px",
    [theme.breakpoints.up("md")]: {
      margin: "0 45px",
    },
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  socialContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  iconSocial: {
    color: theme.color.black,
    width: 22,
    height: 22,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  iconContainer: {
    display: "flex",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "25%",
      justifyContent: "space-around",
    },
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 30,
    [theme.breakpoints.up("sm")]: {
      width: 24,
      height: 24,
    },
    [theme.breakpoints.up("md")]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: 42,
      height: 42,
    },
  },
  feature: {
    fontSize: 16,
    letterSpacing: 3,
    marginTop: 0,
    marginBottom: 5,
    [theme.breakpoints.up("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 22,
    },
  },
  featureText: {
    marginTop: 0,
    color: theme.color.textLight,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
}))

function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container alignItems="flexStart" className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={logo} alt="logo" className={classes.img} />
          <div className={classes.socialContainer}>
            <IconButton
              href="https://www.facebook.com/secondwavesurfing"
              aria-label="facebook"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <FacebookIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/second_wave_surfing/"
              aria-label="instagram"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <InstagramIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.pinterest.com/eisbachriders/"
              aria-label="pinterest"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <PinterestIcon className={classes.iconSocial} />
            </IconButton>
          </div>
        </div>
        {/*  <Hidden xsDown>
          <div className={classes.linksContainer}>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.blog")}</p>
              {blog.map((elem, idx) => (
                <Link
                  key={`blog${idx}`}
                  to={`/tags/${elem}`}
                  className={clsx(classes.text, classes.link)}
                >
                  {t(`links.${elem}`)}
                </Link>
              ))}
            </div>
          </div> 
        </Hidden> */}
      </Container>

      <BottomFooter />
    </footer>
  )
}

export default Footer
