import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { MenuComponent } from "./menuComponent"
import { MenuContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"
import { actions } from "../../store/actions"
import { CheckboxNames } from "../../store/types"

const checkboxNames = [
    'WOMAN',
    'MEN',
    'EX-DISPLAY',
    'NEW',
    'USED',
]

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

const useCheckBox = () => {
    const dispatch = useDispatch()

    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e
        const data = {
            fieldName: (target.name as keyof CheckboxNames),
            value: target.checked
        }
        dispatch(actions.filterProducts(data))
    }
}

export const MenuContainer: React.FC<MenuContainerProps> = () => {
    const dispatch = useDispatch()
    const fetchCategory = useFetchProducts()

    useEffect(() => {
        dispatch(actions.fetchCategoriesData())
    }, [])

    const data = useSelector((store: ReduxState) => store.categories.data)
    const isLoading = useSelector((store: ReduxState) => store.categories.isLoading)
    const checkboxes = useSelector((store: ReduxState) => store.checkboxNames)
    const filterProducts = useCheckBox()

    return (
        <MenuComponent
            data={data}
            isLoading={isLoading}
            fetchCategory={fetchCategory}
            checkboxNames={checkboxNames}
            checkboxes={checkboxes}
            handleChange={filterProducts}
        />
    )
}