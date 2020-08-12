import { checkboxNames } from "../../store/types"

export type HeaderComponentProps = {
    categoryName: string;
    checkboxNames: string[];
    checkboxs: checkboxNames;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

export type date = {
    name: string,
    checked: boolean
}

export type HeaderContainerProps = {}
