import {
  getColor,
  mode,
  styleConfig,
  transparentize,
} from "@chakra-ui/theme-tools"

const alert = styleConfig({
  parts: {
    container: "the alert container",
    title: "the alert title",
    icon: "the alert icon",
  },
  baseStyle: {
    container: {
      paddingX: 4,
      paddingY: 3,
    },
    title: {
      fontWeight: "bold",
      lineHeight: "normal",
    },
    icon: {
      marginRight: 3,
      width: 5,
      height: 5,
    },
  },
  variants: {
    subtle: function (props) {
      const { colorScheme: c } = props
      return {
        container: { bg: getBg(props) },
        icon: { color: mode(`${c}.500`, `${c}.200`)(props) },
      }
    },

    "left-accent": function (props) {
      const { colorScheme: c } = props
      return {
        container: {
          paddingLeft: 3,
          borderLeft: "4px solid",
          borderColor: mode(`${c}.500`, `${c}.200`)(props),
          bg: getBg(props),
        },
        icon: {
          color: mode(`${c}.500`, `${c}.200`)(props),
        },
      }
    },

    "top-accent": function (props) {
      const { colorScheme: c } = props
      return {
        container: {
          paddingTop: 2,
          borderTop: "4px solid",
          borderColor: mode(`${c}.500`, `${c}.200`)(props),
          bg: getBg(props),
        },
        icon: {
          color: mode(`${c}.500`, `${c}.200`)(props),
        },
      }
    },

    solid: function (props) {
      const { colorScheme: c } = props
      return {
        container: {
          bg: mode(`${c}.500`, `${c}.200`)(props),
          color: mode(`white`, `gray.900`)(props),
        },
      }
    },
  },

  defaultProps: {
    variant: "subtle",
  },
})

function getBg(props: any) {
  const { theme, colorScheme: c } = props
  const lightBg = getColor(theme, `${c}.100`, c)
  const darkBg = transparentize(`${c}.200`, 0.16)(theme)
  return mode(lightBg, darkBg)(props)
}

export default alert
