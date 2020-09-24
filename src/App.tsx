import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './globalStyles.css'

import { ThemeProvider } from '@material-ui/core'

import { FooterContainer } from "./pages/footer/footerContainer"
import { HeaderContainer } from "./pages/header/headerContainer"
import { MenuContainer } from "./pages/menuBar/menuContainer"
import { ProductsContainer } from "./pages/products/productsContainer"
import { HomeComponent } from "./pages/homePage/homeComponent"
import { CartContainer } from "./pages/cart/cartContainer"
import { theme } from './theme'

const ProductsPage: React.FC = () => <>
    <MenuContainer />
    <ProductsContainer />
</>

const CartPage: React.FC = () => <>
    <MenuContainer />
    <CartContainer />
</>


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer />
            <Router>
                <Switch>

                    <Route path="/products">
                        <ProductsPage />
                    </Route>

                    <Route path="/cart">
                        <CartPage />
                    </Route>

                    <Route path="/">
                        <HomeComponent />
                    </Route>

                </Switch>
            </Router >
            <FooterContainer />
        </ThemeProvider >
    )
}
