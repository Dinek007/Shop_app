import { ReduxState } from "../../store/reducers"
import { CheckboxNames } from "../../store/types"
import { ChosenCheckboxesData } from "./types"

const getValues = <ChosenCheckboxGroup extends keyof CheckboxNames>(
    checkboxes: CheckboxNames,
    keys: Array<ChosenCheckboxGroup>
) => {

    return keys.filter((checkboxName: ChosenCheckboxGroup) => {
        const checkboxValue = checkboxes[checkboxName]
        if (checkboxValue) {
            return checkboxValue
        }
    })
}

export const selectFilteredProducts = (({ checkboxNames, products }: ReduxState) => {
    const chosenData: ChosenCheckboxesData = {
        gender: getValues(checkboxNames, ['MEN', 'WOMAN']),
        condition: getValues(checkboxNames, ['EX-DISPLAY', 'NEW', 'USED'])
    }
    const chosenDataProperties = Object.keys(chosenData)

    const filteredProducts = products.data.filter((product) => {
        const shouldShowProduct = chosenDataProperties.filter(checkboxName => {
            return chosenData[checkboxName].includes(product[checkboxName])
        }).length === chosenDataProperties.length

        return shouldShowProduct
    })

    return {
        data: filteredProducts,
        isLoading: products.isLoading
    }
})
