import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { MenuComponent } from "./menuComponent"
import { MenuContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"
import { actions } from "../../store/actions"

export const useFetchProducts = () => {
    const dispatch = useDispatch()
    return (id: number, name: string) => {
        const data = {
            name: name,
            id: id
        }
        dispatch(actions.fetchProducts(data))

    }
}

export const MenuContainer: React.FC<MenuContainerProps> = () => {
    const dispatch = useDispatch()
    const fetchCategory = useFetchProducts()

    useEffect(() => {
        dispatch(actions.fetchCategoriesData(123))
    }, [])

    const data = useSelector((store: ReduxState) => store.categories.data)
    const isLoading = useSelector((store: ReduxState) => store.categories.isLoading)
    return (
        <MenuComponent
            data={data}
            isLoading={isLoading}
            fetchCategory={fetchCategory}
        />
    )
}