import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  dark: '#000000',
  color: '#3366cc'
}

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: colors.dark
    },
    secondary: {
      main: colors.color
    }
  }
}))
