import { Action, ActionFunction1 } from "redux-actions"

export type CategoryData = {
  name: string;
  id: number;
}

export type Categories = Array<
  CategoryData & {
    categories: CategoryData[];
  }>

export type Products = Array<
  Record<'id' | 'categoryId' | 'price', number> &
  {
    name: string;
    condition: 'NEW' | 'USED' | 'EX DISPLAY';
    gender: 'MEN' | 'WOMEN';
  }
>

export type checkboxNames = Record<'Woman' | 'Men' | 'New' | 'Used' | 'ExDisplay', boolean>


type ActionsBasicType = {
  [k: string]: ActionFunction1<any, any>;
}

export type ActionsType<Actions extends ActionsBasicType> = {
  [k in keyof Actions]: ReturnType<Actions[k]>;
}

export type PayloadType<actions extends ActionsType<ActionsBasicType>> =
  actions[keyof actions]['payload']

