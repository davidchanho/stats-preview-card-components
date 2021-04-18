import { breakpoints } from "./breakpoints";
import * as Colors from "./colors";
import * as Fonts from "./fonts";

const theme = {
  colors: {
    white: Colors.white["100"],
    black: Colors.black["100"],

    primary: Colors.blue["200"],
    primaryText: Colors.white['100'],

    accent: Colors.blue["100"],

    background: Colors.purple["200"],

    tint: Colors.purple['300'],

    secondary: Colors.white["200"],
    muted: Colors.white["300"],

    link: Colors.purple["100"],
  },
  breakpoints,
  fonts: Fonts,
};

export default theme;
