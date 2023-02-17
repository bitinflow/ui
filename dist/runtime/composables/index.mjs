import { useMenuStore } from "../stores/menu.mjs";
export const useMenu = (options) => {
  const menu = useMenuStore();
  if (options.thirdLevelLinks) {
    menu.updateThirdLevelLinks(options.thirdLevelLinks);
  }
};
