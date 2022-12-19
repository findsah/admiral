import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#178A7B",
      dark: "#146F62",
      light: "#A2CBF4",
    },
    gray: {
      main: "#707070",
      dark: "#146F62",
      light: "#A2CBF4",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    sliderColor: {
      main: "#2578C6",
    },
    navBg: {
      main: "#fff",
      light: "#B60F0F",
      dark: "",
      contrastText: "#B60F0F",
    },
    tableColor: {
      main: "#ECE9FD",
      light: "#F2F9FF",
    },
    gray: {
      main: "#787878",
      light: "#ededed",
      dark: "#737373",
      contrastText: "#bbbbbb",
    },
    btnColor: {
      main: "#FF706F",
      dark: "#e10e1d",
      light: "#ffebef",
      contrastText: "#fff",
    },
    chip: {
      main: "#FF6787",
      light: "rgba(255, 103, 135, 0.1)",
      contrastText: "#FF0000",
    },
    green: {
      main: "#00fc00",
      light: "#ccffc3",
      dark: "#00be00",
      contrastText: "#a5ff99",
    },
  },
  typography: {
    fontFamily: ["Tajawal", "sans-serif"].join(","),
    // fontSize: 12,
    // body1: {
    //   fontSize: 12,
    // },
  },
  components: {
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: () => ({
          flexDirection: i18n.dir() === "ltr" ? "row-reverse" : "inherit",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: () => ({
          fontSize: "12px",
          outlined: {
            backgroundColor: "red",
            textTransform: "capitalize !important",
          },
        }),
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          "& label": {
            textTransform: "capitalize",
            color: ownerState?.error
              ? ""
              : `${theme.palette.common.black} !important`,
            fontSize: "16px !important",
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          color: `${theme.palette.gray.main} `,
          textTransform: "capitalize",
          "& fieldset": {
            borderColor: ownerState.error
              ? ""
              : `${theme.palette.gray.dark} !important`,
            borderWidth: "1px !important",
          },
          "& .MuiOutlinedInput-input": {
            display: "flex",
          },
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          cursor: "pointer",
          // "&:hover": {
          //   fill: `${theme.palette.btnColor.main} !important`,
          // },
          // "body[dir=rtl] &": {
          //   transform: "scaleX(-1)",
          // },
        }),
      },
    },
  },
});
