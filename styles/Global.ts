import { createGlobalStyle } from "styled-components";
import * as Colors from "./colors";
import * as Fonts from "./fonts";

const GlobalStyles = createGlobalStyle`
   html, body {
  padding: 0;
  margin: 0;
  font-size: ${Fonts.fontSize};
  font-family: ${Fonts.fontFamily};
  background-color: ${Colors.purple["200"]};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

li {
  list-style-type: none;
}
`;

export default GlobalStyles;
