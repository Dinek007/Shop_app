import { Products, checkboxNames } from "../store/types"


export type MenuItemProps = {
  text?: string;
  selectCategory?: Function;
}

export type ProductItemProps =
  Products[number]

export type FilterProps = {
  checkboxNames: string[];
  checkboxs: checkboxNames;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


