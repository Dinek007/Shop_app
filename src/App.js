import React from 'react'

import { FooterContainer } from "./pages/footer/footerContainer"
import { HeaderContainer } from "./pages/header/headerContainer"
import { MenuContainer } from "./pages/menuBar/menuContainer"


export const App = () => {
    return (
        <div>
            <FooterContainer></FooterContainer>
            <HeaderContainer></HeaderContainer>
            <MenuContainer></MenuContainer>
        </div>
    )
}
