import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  red: '#ff0000',
  green: '#ccff00'
}

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: colors.green
    },
    secondary: {
      main: colors.red
    }
  }
}))
