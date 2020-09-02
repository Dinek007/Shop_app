import { Products, CheckboxNames } from "../store/types"


export type MenuItemProps = {
  text?: string;
  selectCategory?: Function;
}

export type ProductItemProps =
  Products[number]

export type FilterProps = {
  checkboxNames: string[];
  checkboxes: CheckboxNames;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
