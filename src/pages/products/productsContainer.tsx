import React from "react"
import { useSelector } from "react-redux"

import { ProductsComponent } from "./productsComponent"
import { ProductsContainerProps } from "./types"
import { ReduxState } from "../../store/reducers"

export const ProductsContainer: React.FC<ProductsContainerProps> = () => {
    const products = useSelector((store: ReduxState) => store.products)
    return (
        <ProductsComponent {...products} />
    )
}