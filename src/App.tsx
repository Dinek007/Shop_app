import React from 'react'

import { ThemeProvider } from '@material-ui/core'

import { FooterContainer } from "./pages/footer/footerContainer"
import { HeaderContainer } from "./pages/header/headerContainer"
import { MenuContainer } from "./pages/menuBar/menuContainer"
import { ProductsContainer } from "./pages/products/productsContainer"
import { theme } from './theme'


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
            <MenuContainer/>
            <ProductsContainer/>
            <FooterContainer/>
        </ThemeProvider>
    )
}
