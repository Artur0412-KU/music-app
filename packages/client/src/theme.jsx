import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        margin: 0,
        "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },
      code: {
        "font-family": "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
    },
  },
  colors: {
    light: {
      textColor: "#333", // Define a new text color for light mode
    },
    dark: {
      textColor: "#fff"
    }
  },
});

export default extendTheme(theme);

