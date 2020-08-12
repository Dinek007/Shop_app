import { Categories } from "../../store/types"

export type MenuComponentProps = {
  /**
    * @description  array of categories to display in menu
    * @property data
  */
  data: Categories;
  /**
    * set to true will render a progress bar
  */
  isLoading: boolean;
  /**
    * function to fetch products data after choosing a category
  */
  fetchCategory: (id: number, name: string) => void;
}

export type MenuContainerProps = {}
