import { Products } from "../../store/types"

export type ProductsComponentProps = {
  /**
    * @description  array of products to display on page
    * @property data
  */
  data: Products;
  /**
    * set to true will render a progress bar
  */
  isLoading: boolean;
  /**
    * name of cliked category
  */
}
export type ProductsContainerProps = {}


type FiltretableProductData = Exclude<keyof Products[number], 'id' | 'categoryId'>

export type ChosenCheckboxesData = Partial<{
  [p in FiltretableProductData]: Array<Products[number][p]>;
}>

