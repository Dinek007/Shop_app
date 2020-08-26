import { Categories } from "../../store/types"
import { CheckboxNames } from "../../store/types"

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
  checkboxNames: string[];
  checkboxes: CheckboxNames;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type MenuContainerProps = {}
