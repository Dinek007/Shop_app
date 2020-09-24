import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  dark: '#aaaaaa',
  color: '#00A0C9'
}

const applyStandardFont = {
  fontFamily: `'Arima Madurai', sans-serif`
}

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: colors.dark
    },
    secondary: {
      main: colors.color
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        ...applyStandardFont
      },
      h4: {
        ...applyStandardFont
      },
      h2: {
        ...applyStandardFont,
        fontWeight: 'lighter',
        fontSize: 25
      },
      body1: {
        ...applyStandardFont,
        fontSize: 17
      }
    },
    MuiButton: {
      label: {
        fontSize: 18,

      }
    }
  }
}))
