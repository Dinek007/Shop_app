import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { MenuComponent } from "./menuComponent"
import { MenuContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"
import { actions } from "../../store/actions"

export const useFetchCategory = () => {
    const dispatch = useDispatch()
    return (id: number) => {
        dispatch(actions.fetchProducts(id))
    } 
}

export const MenuContainer: React.FC<MenuContainerProps> = () => {
    const dispatch = useDispatch()
    const fetchCategory = useFetchCategory()

    useEffect(() => {
        dispatch(actions.fetchCategoriesData(123))
    }, [])

    const data = useSelector((store: ReduxState) => store.categories.data)
    const isLoading = useSelector((store: ReduxState) => store.categories.isLoading)
    return (
        <MenuComponent
            data= {data}
            isLoading= {isLoading}
            fetchCategory= {fetchCategory}
        />
    )
}