import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "./Header"
import Footer from "./footer/Footer"
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

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
