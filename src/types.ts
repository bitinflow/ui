export interface MenuOptions {
  thirdLevelLinks: Array<ThirdLevelLink>;
}

export interface ThirdLevelLink {
  name: string;
  icon: string;
  to: string;
}
