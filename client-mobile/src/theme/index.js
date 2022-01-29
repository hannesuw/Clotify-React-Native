import { extendTheme } from "native-base";

const newColorTheme = {
  brand: {
    900: "#e4d8b4",
    800: "#7c83db",
    700: "#b3bef6",
  },
  base: {
    primary: "#7f6df3",
    secondary: "#9e8ffc",
  },
};

export const theme = extendTheme({ colors: newColorTheme });
