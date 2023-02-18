export interface MenuOptions {
  thirdLevelLinks: Array<ThirdLevelLink>;
  thirdLevelProps: Object;
}

export interface ThirdLevelLink {
  name: string;
  icon: string;
  to: string;
}
