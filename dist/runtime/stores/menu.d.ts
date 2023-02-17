import { ThirdLevelLink } from "../../types";
export declare const useMenuStore: import("pinia").StoreDefinition<"menu", {
    thirdLevelLinks: ThirdLevelLink[];
}, {}, {
    updateThirdLevelLinks(links: Array<ThirdLevelLink>): void;
}>;
