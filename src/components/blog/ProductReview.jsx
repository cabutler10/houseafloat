import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import StarHalfIcon from "@material-ui/icons/StarHalf"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    marginLeft: 15,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 45,
    },
  },
  subtitle: {
    textTransform: "uppercase",
    fontSize: 18,
  },
  subtitle2: {
    textTransform: "uppercase",
    fontSize: 18,
    marginBottom: 0,
  },
  technicalContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
  tableContainer: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "60%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "40%",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "60%",
    },
  },
  img: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 300,
    },
    [theme.breakpoints.up("md")]: {
      width: 300,
    },
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "15px 15px 30px 15px",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.secondary.main,
  },
  starsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  rating: {
    fontWeight: 700,
    fontSize: 32,
    color: theme.color.black,
    margin: 0,
  },
  star: {
    color: theme.color.black,
  },
  proConContainer: {
    background: theme.color.gray,
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
  },
  listItemContainer: {
    display: "flex",
    alignItems: "center",
  },
  pro: {
    marginLeft: 10,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 15,
    },
  },
  dot: {
    marginLeft: 10,
    width: 8,
    height: 8,
    backgroundColor: theme.color.black,
    borderRadius: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 30,
    },
  },
  buttonContainer: {
    background: theme.color.gray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 30,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 45,
    },
  },
}))

export default function ProductReview({
  title,
  img,
  rating,
  technicalData_en,
  technicalData_de,
  pros_en,
  pros_de,
  cons_en,
  cons_de,
  href,
}) {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  let pros = i18n.language === "de" ? pros_de : pros_en
  let cons = i18n.language === "de" ? cons_de : cons_en
  let technicalData =
    i18n.language === "de" ? technicalData_de : technicalData_en

  return (
    <Container flexDirection="column" flexWrap="nowrap">
      {/* <div className={classes.titleContainer}>
        <div className={classes.reviewContainer}>
          <p className={classes.rating}>{rating}</p>
          <div className={classes.starsContainer}>
            {[1, 2, 3, 4, 5].map((elem) => (
              <Fragment key={elem}>
                {elem < rating ? (
                  <StarIcon className={classes.star} key={`star${elem}`} />
                ) : rating % 1 !== 0 && Math.floor(rating) === elem - 1 ? (
                  <StarHalfIcon className={classes.star} key={`star${elem}`} />
                ) : (
                  <StarBorderIcon
                    className={classes.star}
                    key={`star${elem}`}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.technicalContainer}>
        <div className={classes.imgContainer}>
          <img src={img} alt={`product_${title}`} className={classes.img} />
        </div>
        <div className={classes.tableContainer}>
          <p className={classes.subtitle}>{t("blog.technicalData")}</p>
          <Table className={classes.table} aria-label={t("blog.technicalData")}>
            <TableBody>
              {Object.keys(technicalData).map((row) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell align="right">{technicalData[row]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className={classes.proConContainer}>
        <div className={classes.flexItem}>
          <p className={classes.subtitle2}>{t("blog.positives")}</p>
          {pros.map((elem) => (
            <div className={classes.listItemContainer} key={`pro-${elem}`}>
              <div className={classes.dot}></div>
              <p className={classes.pro}>{elem}</p>
            </div>
          ))}
        </div>
        <div className={classes.flexItem}>
          <p className={classes.subtitle2}>{t("blog.negatives")}</p>
          {cons.map((elem) => (
            <div className={classes.listItemContainer} key={`con-${elem}`}>
              <div className={classes.dot}></div>
              <p className={classes.pro}>{elem}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          href={href}
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          {t("blog.buy")}
        </Button>
      </div> */}
    </Container>
  )
}
