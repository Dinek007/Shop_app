import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core'

import './globalStyles.css'
import { FooterContainer } from "./pages/footer/footerContainer"
import { HeaderContainer } from "./pages/header/headerContainer"
import { MenuContainer } from "./pages/menuBar/menuContainer"
import { ProductsContainer } from "./pages/products/productsContainer"
import { HomeComponent } from "./pages/homePage/homeComponent"
import { CartContainer } from "./pages/cart/cartContainer"
import { theme } from './theme'

const ProductsPage: React.FC = () => <div style={{ display: 'flex' }}>
    <MenuContainer />
    <ProductsContainer />
</div>

const CartPage: React.FC = () => <div style={{ display: 'flex' }}>
    <MenuContainer />
    <CartContainer />
</div>

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
