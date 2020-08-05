import { Action, ActionFunction1 } from "redux-actions"

type CategoryData = {
  name : string;
  id : number;
}

export type Categories = Array<
  CategoryData & {
    categories: CategoryData[]
  }>

export type Products = Array<
  Record<'id' | 'categoryId', number> &
  { name: string }
>




type ActionsBasicType = {
  [k: string]: ActionFunction1<any, any>;
}

export type ActionsType <Actions extends ActionsBasicType> = {
  [k in keyof Actions]: ReturnType<Actions[k]>;
}

export type PayloadType <actions extends ActionsType<ActionsBasicType>> =
  actions[keyof actions]['payload']

// export type CategoresData = Partial<Record<
//   "menuItemsUsed" | "menuItemsNoUsed" | "menuItemsUser",
//   string[]
// >>
