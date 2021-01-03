import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.up("lg")]: {
      marginTop: 60,
      marginBottom: 60,
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  center: {
    justifyContent: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "48%",
    },
  },
  caption: {
    fontSize: 11,
    textAlign: "right",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}))
export default function ImageContainer({
  img1,
  alt1,
  caption1,
  img2,
  alt2,
  caption2,
}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div
        className={clsx(
          classes.container,
          img2 ? classes.spaceBetween : classes.center
        )}
      >
        <div className={img2 ? classes.flexItem : null}>
          <img src={img1} alt={alt1} className={classes.img} />
          <p className={classes.caption}>{caption1}</p>
        </div>
        {img2 && (
          <div className={classes.flexItem}>
            <img src={img2} alt={alt2} className={classes.img} />
            <p className={classes.caption}>{caption2}</p>
          </div>
        )}
      </div>
    </div>
  )
}
