import React from "react"
import { useSelector } from "react-redux"

import { HeaderComponent } from "./headerComponent"
import { HeaderContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"




export const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const category = useSelector((store: ReduxState) => store.chosenCategory)

    return (
        <HeaderComponent
            categoryName={category}
        />
    )
}