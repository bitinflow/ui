import {defineStore} from 'pinia';

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            thirdLevelLinks: []
        }
    },
    actions: {
        updateThirdLevelLinks(links) {
            this.thirdLevelLinks = links;
        },
    },
})