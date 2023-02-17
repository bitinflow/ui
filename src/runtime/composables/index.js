import {useMenuStore} from "../stores/menu.js";

export const useMenu = (data) => {
    const menu = useMenuStore()
    if (data.thirdLevelLinks) {
        menu.updateThirdLevelLinks(data.thirdLevelLinks)
    }
}