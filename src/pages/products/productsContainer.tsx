import React from "react"

import { ProductsComponent } from "./productsComponent"
import { ProductsContainerProps } from "./types"

export const ProductsContainer: React.FC<ProductsContainerProps> = () => {

    return (
        <ProductsComponent/>
    )
}