import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
        bg: "var(--grey-a005)",
      },
      label: {
        _invalid: {
          color: "var(--chakra-colors-red-500)",
        }
      },
      textarea: {
        resize: "none",
      }
    }
  },
  colors: {
    brandPink: {
        50: "#FDE7EF",
        100: "#FABCD3",
        200: "#F792B7",
        300: "#F4679B",
        400: "#F13C7E",
        500: "#EE1162",
        600: "#BE0E4F", //COR PADRÃO
        700: "#8F0A3B",
        800: "#5F0727",
        900: "#300314"
    },
    brandPurple: {
      50: "#FAEAF6",
      100: "#F2C5E6",
      200: "#E99FD6",
      300: "#E17AC6",
      400: "#D954B6",
      500: "#D02FA6",
      600: "#A72585",
      700: "#7D1C64",
      800: "#531342",
      900: "#2A0921"
    },
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A"
    },
  },
  fonts: {
    body: "'Roboto', sans-serif",
  },
  components: {
    Radio: {
      defaultProps: {
        colorScheme: "brandPink",
      }
    },
    Input: {
      defaultProps: {
        // focusBorderColor: "brandPink.600",
      }
    },
    Textarea: {
      defaultProps: {
        // focusBorderColor: "brandPink.600",
      }
    },
    Select: {
      defaultProps: {
        // focusBorderColor: "brandPink.600",
      }
    },
    Button: { 
      variants: {
        "gradient": {
          height: "40px",
          color: "var(--white)",
          backgroundImage: "var(--brand-gradient-down)",
          boxShadow: "0px 5px 25px 0px var(--grey-a010)",
          _hover: {
            boxShadow: "0px 5px 25px 0px var(--grey-a030)",
            filter: "brightness(115%)",
          },
          _disabled: {
            backgroundImage: "var(--brand-gradient-down) !important",
          },
        },
      }
    }
  }
});

export default theme;