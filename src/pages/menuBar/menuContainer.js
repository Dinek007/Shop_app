import React from "react"
import { useSelector } from "react-redux"

import { MenuComponent } from "./menuComponent"

export const MenuContainer = () => {
    const menuItemsUsed = useSelector(store => store.menuItemsUsed)
    const menuItemsNoUsed = useSelector(store => store.menuItemsNoUsed)
    const menuItemsUser = useSelector(store => store.menuItemsUser)
    return (
        <MenuComponent
            menuItemsUsed={menuItemsUsed}
            menuItemsNoUsed={menuItemsNoUsed}
            menuItemsUser={menuItemsUser}
        >
        </MenuComponent>
    )
}