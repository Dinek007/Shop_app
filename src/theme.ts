import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  dark: '#aaaaaa',
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
