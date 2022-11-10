import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header: string;
      title: string;
      subTitle: string;
      text: string;
    };

    colors: {
      mainColor: string;
      subColor: string;
      pointColor: string;
      buttonColor: string;
      grayColor: string;
    };
  }
}