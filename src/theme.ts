import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  blue: '#55aacc',
  pink: '#eeeeee'
}

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: colors.blue
    },
    secondary: {
      main: colors.pink
    }
  }
}))
