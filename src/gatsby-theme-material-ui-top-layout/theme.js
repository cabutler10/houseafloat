import { createMuiTheme } from "@material-ui/core/styles"
import "../app.css"

const color = {
  // theme colors
  gray: "#E6EEF3",
  grayLt: "rgba(237, 234, 229, .2)",
  brown: "#D29469",
  blue: "#317095",
  blueLt: "#4091c0",
  black: "#232b2b",
  white: "#FFF",
}

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: color.blueLt,
      main: color.blue,
      dark: color.blueLt,
    },
    secondary: {
      light: color.brown,
      main: color.brown,
      dark: color.brown,
    },
  },
  color,
  typography: {
    fontFamily: ["Raleway", "sans-serif", "Amatic SC"].join(","),
    h1: {
      letterSpacing: 2,
    },
    h2: {
      letterSpacing: 2,
    },
    h3: {
      letterSpacing: 2,
    },
    h4: {
      letterSpacing: 2,
    },
    h5: {
      letterSpacing: 2,
    },
    body1: {
      letterSpacing: 1.5,
      fontSize: 14,
    },
    body2: {
      letterSpacing: 1.5,
      fontSize: 12,
    },
    button: {
      fontFamily: "'Raleway', sans-serif",
      letterSpacing: 3,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "9px 27px",
        borderRadius: 0,
      },
      contained: {
        boxShadow: "none",
      },
    },
  },
})

export default theme
