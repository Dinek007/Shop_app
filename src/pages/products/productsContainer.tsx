import React from "react"
import { useSelector } from "react-redux"

import { ProductsComponent } from "./productsComponent"
import { ProductsContainerProps } from "./types"
import { selectFilteredProducts } from "./products.selectors"


export const ProductsContainer: React.FC<ProductsContainerProps> = () => {
    const products = useSelector(selectFilteredProducts)

    return (
        <ProductsComponent
            {...products}

        />
    )
}
