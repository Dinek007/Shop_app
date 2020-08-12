import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { HeaderComponent } from "./headerComponent"
import { HeaderContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"
import { actions } from "../../store/actions"

const checkboxNames = [
    "Woman",
    "Man",
    "New",
    "Used",
    "ExDisplay"
]

const useCheckBox = (date: any) => {
    const dispatch = useDispatch()
    console.log(date)
    return () => {
        dispatch(actions.fetchProducts(date))
    }
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.checked)
    const date = {
        name: event.target.name,
        checked: event.target.checked
    }
    const checkboxHook = useCheckBox(date)
};

export const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const category = useSelector((store: ReduxState) => store.chosenCategory)
    const checkboxs = useSelector((store: ReduxState) => store.checkboxNames)
    // 
    return (
        <HeaderComponent
            categoryName={category}
            checkboxNames={checkboxNames}
            checkboxs={checkboxs}
            handleChange={handleChange}
        />
    )
}