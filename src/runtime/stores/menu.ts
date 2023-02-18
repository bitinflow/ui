import {defineStore} from 'pinia';
import {ThirdLevelLink} from "../../types";

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            thirdLevelLinks: [] as Array<ThirdLevelLink>,
            thirdLevelProps: [] as Object,
        }
    },
    actions: {
        updateThirdLevelLinks(links: Array<ThirdLevelLink>) {
            this.thirdLevelLinks = links;
        },
        updateThirdLevelProps(props: Object) {
            this.thirdLevelProps = props;
        }
    },
})
