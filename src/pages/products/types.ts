import { Products } from "../../store/types"

export type ProductsComponentProps = {
  data: Products;
  isLoading: boolean;
}

export type ProductsContainerProps = {}

type FiltretableProductData = Exclude<keyof Products[number], 'id' | 'categoryId'>;

export type ChosenCheckboxesData = Partial<{
  [p in FiltretableProductData]: Array<Products[number][p]>;
}>