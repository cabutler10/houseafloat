import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Snackbar from "@material-ui/core/Snackbar"
import Hidden from "@material-ui/core/Hidden"
import CircularProgress from "@material-ui/core/CircularProgress"
import Notification from "./ui/Snackbar"
import Container from "./ui/Container"

const useStyles = makeStyles((theme) => ({
  banner: {
    height: 150,
    [theme.breakpoints.up("sm")]: {
      height: 300,
    },
  },
  bannerImg: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: theme.palette.common.black,
    fontSize: 12,
    lineHeight: 1.5,
    [theme.breakpoints.up("sm")]: {
      lineHeight: 2,
    },
  },
  textHeading: {
    color: theme.palette.common.black,
    fontSize: 12,
    textTransform: "uppercase",
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingTop: 0,
    },
  },
  textField: {
    margin: 0,
    width: "48%",
  },
  textArea: {
    paddingLeft: 20,
    color: theme.palette.common.black,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 12,
    color: theme.palette.common.black,
    border: "1px solid",
  },
  inputError: {
    fontSize: 12,
    border: `1px solid ${theme.palette.error.main}`,
  },
  inputLabel: {
    fontSize: 12,
    paddingLeft: 20,
    color: theme.palette.common.black,
  },
  buttonSend: {
    marginTop: 15,
    color: theme.palette.common.black,
  },
  progress: {
    color: theme.palette.common.black,
  },
  form: {
    width: "70%",
  },
}))

function ContactTemp() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isEmailValid, setEmailValid] = useState(true)
  const [isNameValid, setNameValid] = useState(true)
  const [isMessageValid, setMessageValid] = useState(true)
  const [isTouched, setTouched] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [notification, setNotification] = useState("success")
  const [isLoading, setLoading] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { in: "blogBanner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bannerMobile: file(relativePath: { in: "blogBannerMobile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleChange = (name) => (event) => {
    if (!isTouched) {
      setTouched(true)
    }
    if (name === "email") {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
        setEmail(event.target.value)
      } else {
        setEmailValid(true)
        setEmail(event.target.value)
      }
    }
    if (name === "name") {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    }
    if (name === "message") {
      if (event.target.value.length > 1000) {
        setMessageValid(false)
      } else {
        setMessageValid(true)
        setMessage(event.target.value)
      }
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    if (
      isEmailValid &&
      isMessageValid &&
      message.length > 0 &&
      isNameValid &&
      isTouched
    ) {
      fetch("https://formspree.io/myynzldd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          emailAddress: email,
          name: name,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            setSnackbar(true)
            setNotification("success")
            setEmail("")
            setMessage("")
            setName("")
            setLoading(false)
          } else {
            setSnackbar(true)
            setNotification("error")
            setLoading(false)
          }
        })
        .catch((err) => {
          setSnackbar(true)
          setNotification("error")
          setLoading(false)
        })
    } else {
      setSnackbar(true)
      setNotification("warning")
      setLoading(false)
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbar(false)}
      >
        <Notification
          onClose={() => setSnackbar(false)}
          variant={notification}
          message={
            notification === "success" ? t("form.success") : t("form.error")
          }
        />
      </Snackbar>
      <div className={classes.banner}>
        <Hidden smUp>
          <Img
            alt={`surfers sitting in water`}
            fluid={data.bannerMobile.childImageSharp.fluid}
            placeholderStyle={{ backgroundColor: `lightgray` }}
            className={classes.bannerImg}
            imgStyle={{ objectPosition: "top center" }}
          />
        </Hidden>
        <Hidden xsDown>
          <Img
            alt={`surfers sitting in water`}
            fluid={data.banner.childImageSharp.fluid}
            placeholderStyle={{ backgroundColor: `lightgray` }}
            className={classes.bannerImg}
            imgStyle={{ objectPosition: "top center" }}
          />
        </Hidden>
      </div>
      <Container justifyContent="center">
        <form noValidate autoComplete="off" className={classes.form}>
          <Typography className={classes.textHeading} variant="h5">
            {t("form.contactTitle")}
          </Typography>

          <div className={classes.inputContainer}>
            <TextField
              id="footer_name"
              label={t("form.name")}
              type="text"
              className={classes.textField}
              InputProps={{
                className: isNameValid ? classes.input : classes.inputError,
                disableUnderline: true,
                classes: { input: classes.textArea },
              }}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              value={name}
              placeholder={t("form.name")}
              onChange={handleChange("name")}
              margin="normal"
              required
            />
            <TextField
              id="footer_email"
              label={t("form.email")}
              type="email"
              className={classes.textField}
              InputProps={{
                className: isEmailValid ? classes.input : classes.inputError,
                disableUnderline: true,
                classes: { input: classes.textArea },
              }}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              value={email}
              placeholder={t("form.email")}
              onChange={handleChange("email")}
              margin="normal"
              required
            />
          </div>
          <TextField
            label={t("form.message")}
            id="footer_message"
            type="text"
            InputProps={{
              className: isMessageValid ? classes.input : classes.inputError,
              disableUnderline: true,
              classes: { input: classes.textArea },
            }}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            value={message}
            placeholder={t("form.message")}
            onChange={handleChange("message")}
            margin="normal"
            fullWidth
            multiline
            rows="4"
            required
          />
          <Button
            data-testid="footer_submit"
            variant="contained"
            color="primary"
            className={classes.buttonSend}
            fullWidth
            onClick={handleSubmit}
          >
            {isLoading ? (
              <CircularProgress size={24} className={classes.progress} />
            ) : (
              t("form.send")
            )}
          </Button>
        </form>
      </Container>
    </>
  )
}

export default ContactTemp
