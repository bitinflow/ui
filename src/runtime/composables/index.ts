import {useMenuStore} from "../stores/menu";
import {MenuOptions} from "../../types";

export const useMenu = (options: MenuOptions) => {
    const menu = useMenuStore()
    if (options.thirdLevelLinks) {
        menu.updateThirdLevelLinks(options.thirdLevelLinks)
    }
    if (options.thirdLevelProps) {
        menu.updateThirdLevelProps(options.thirdLevelProps)
    }
}
