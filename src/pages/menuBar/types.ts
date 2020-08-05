import { Categories } from "../../store/types"
import { useFetchCategory } from "./menuContainer"

export type MenuComponentProps = {
  data: Categories; 
  isLoading: boolean;
  fetchCategory: (id: number) => void;
}

export type MenuContainerProps = {}
