declare interface IWpReactWebPartStrings {
  WelcomeMessage: string,
  PromotionMessage: string,
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  PropertyPaneSummary: string;
  MoreFieldLink: string;
  MoreFieldText: string;
  SliderText: string;
  MultiText: string;
  LoadText: string;
}

declare module 'WpReactWebPartStrings' {
  const strings: IWpReactWebPartStrings;
  export = strings;
}
