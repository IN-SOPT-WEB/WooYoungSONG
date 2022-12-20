import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: {
      header: string;
      title: string;
      subTitle: string;
      text: string;
    };

    colors: {
      green: string;
      red: string;
      yellow: string;
      white: string;
      brown: string;
    };
  }
}
