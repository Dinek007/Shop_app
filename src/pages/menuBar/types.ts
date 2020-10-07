import { Categories } from "../../store/types"
import { CheckboxNames } from "../../store/types"

export type MenuComponentProps = {
  data: Categories;
  isLoading: boolean;

  fetchCategory: (id: number, name: string) => void;
  checkboxNames: string[];
  checkboxes: CheckboxNames;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type MenuContainerProps = {}
