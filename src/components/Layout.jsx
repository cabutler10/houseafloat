import React from "react"
import { useTranslation } from "react-i18next"
import CookieConsent from "react-cookie-consent"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./Header"
import Footer from "./footer/Footer"
import { Link } from "gatsby-theme-material-ui"
import "../i18n/i18n"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: theme.color.white,
    minHeight: "100%",
  },
  main: {
    flexGrow: 1,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const handleOptOut = () => {
    var disableStr = `ga-disable-${process.env.GA_KEY}`
    document.cookie = `${disableStr}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`
    window[disableStr] = true
  }

  const handleAccept = () => {
    window.location.reload(false)
  }

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>{children}</main>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        onDecline={() => handleOptOut()}
        onAccept={() => handleAccept()}
        declineButtonText={t("tracking.decline")}
        setDeclineCookie
        declineButtonStyle={{
          color: "#00130e",
          fontSize: "14px",
          textTransform: "uppercase",
          background: "transparent",
          letterSpacing: 1.5,
        }}
        buttonText={t("tracking.accept")}
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#f0dda0", color: "#00130e" }}
        buttonStyle={{
          background: "#E6C55E",
          color: "#00130e",
          fontSize: "14px",
          padding: "14px 24px",
          borderRadius: 3,
          lineHeight: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "1.25px",
          fontFamily: '"Roboto", sans-serif,',
          fontWeight: 500,
        }}
        expires={150}
      >
        {t("tracking.consent")}
        <Link
          to="/dataProtection/"
          style={{ color: "#00130e", textDecoration: "underline" }}
        >
          {t("tracking.dataPrivacy")}.
        </Link>
      </CookieConsent>
      <Footer />
    </div>
  )
}

export default Layout
