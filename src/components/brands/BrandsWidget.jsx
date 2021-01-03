import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "../ui/Container"
import er from "../../assets/logos/eisbach-riders.svg"
import shepps from "../../assets/logos/shepps-gnarwall.png"
import waxzam from "../../assets/logos/waxzam.png"
import vanderwaal from "../../assets/logos/van-der-waal-logo.png"
import greenfix from "../../assets/logos/greenfix.png"

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    flexBasis: "19%",
    textAlign: "center",
    cursor: "pointer",
  },
  logo: {
    height: 35,
    [theme.breakpoints.up("md")]: {
      height: 75,
    },
  },
}))

function BrandsWidget() {
  const classes = useStyles()

  const brands = [
    { name: "eisbach riders", img: er, link: "eisbach-riders" },
    { name: "shepps gnarwall", img: shepps, link: "shepps-gnarwall" },
    { name: "waxzam", img: waxzam, link: "wax-zam" },
    { name: "van der waal", img: vanderwaal, link: "van-der-waal" },
    { name: "greenfix", img: greenfix, link: "greenfix" },
  ]

  return (
    <Container variant="center">
      <div className={classes.logoContainer}>
        {brands.map((elem, idx) => (
          <a
            key={`logo${idx}`}
            href={`https://secondwavesurfing.com/shop/brand/${elem.link}/`}
            className={classes.link}
          >
            <img
              src={elem.img}
              alt={`brand${elem.name}`}
              className={classes.logo}
            />
          </a>
        ))}
      </div>
    </Container>
  )
}

export default BrandsWidget
