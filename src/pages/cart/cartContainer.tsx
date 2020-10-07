import React from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"

import { CartComponent } from "./cartComponent"
import { CartContainerProps } from "./types"

const getLocalStorageItems = () => {
    const itemsArray = localStorage.items
        ? JSON.parse(localStorage.items)
        : []
    return itemsArray
}

const useChangeButton = (categoryName) => {
    const dispatch = useDispatch()
    dispatch(actions.setChosenCategory(categoryName))
}

export const CartContainer: React.FC<CartContainerProps> = () => {
    const dataItems = getLocalStorageItems()
    useChangeButton("Cart")

    return (
        <CartComponent
            data={dataItems}
        />
    )
}
