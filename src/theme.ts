
import { createContext, useState, useMemo, Context } from "react";
import { createTheme, Theme } from "@mui/material/styles";




export const colorPalette = (mode: object|string) => ({
	...(mode = 'dark' ? {
		yellowAccent: {
			100: "#fef7db",
			200: "#feeeb7",
			300: "#fde694",
			400: "#fddd70",
			500: "#fcd54c",
			600: "#caaa3d",
			700: "#97802e",
			800: "#65551e",
			900: "#322b0f"
		},
		black: {
			100: "#d4d4d4",
			200: "#a9a9a9",
			300: "#7d7d7d",
			400: "#525252",
			500: "#272727",
			600: "#1f1f1f",
			700: "#171717",
			800: "#101010",
			900: "#080808"
		},
		white: {
			100: "#ffffff",
			200: "#ffffff",
			300: "#ffffff",
			400: "#ffffff",
			500: "#ffffff",
			600: "#cccccc",
			700: "#999999",
			800: "#666666",
			900: "#333333"
		},
		grey: {
  100: "#e9e9e9",
  200: "#d3d3d3",
  300: "#bebebe",
  400: "#a8a8a8",
  500: "#929292",
  600: "#757575",
  700: "#585858",
  800: "#3a3a3a",
  900: "#1d1d1d"
},
	} : {
		yellowAccent: {
			900: "#fef7db",
			800: "#feeeb7",
			700: "#fde694",
			600: "#fddd70",
			500: "#fcd54c",
			400: "#caaa3d",
			300: "#97802e",
			200: "#65551e",
			100: "#322b0f"
		},
		black: {
			900: "#d4d4d4",
			800: "#a9a9a9",
			700: "#7d7d7d",
			600: "#525252",
			500: "#d4d4d4", //edit
			400: "#1f1f1f",
			300: "#171717",
			200: "#101010",
			100: "#080808"
		},
		white: {
			900: "#ffffff",
			800: "#ffffff",
			700: "#ffffff",
			600: "#ffffff",
			500: "#ffffff",
			400: "#cccccc",
			300: "#999999",
			200: "#666666",
			100: "#333333"
			},
		grey: {
  900: "#e9e9e9",
  800: "#d3d3d3",
  700: "#bebebe",
  600: "#a8a8a8",
  500: "#929292",
  400: "#757575",
  300: "#585858",
  200: "#3a3a3a",
  100: "#1d1d1d"
},
  })
});

export const themeSettings:any = (mode:string) => {
  const colors = colorPalette(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.black[100],
            },
            secondary: {
              main: colors.yellowAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Work Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


// context for color mode

interface IColorModeContext{
	toggleColorMode: () => void,
	mode:'dark'|'light'
}
export const ColorModeContext = createContext<any>({
	toggleColorMode: () => { },
	mode:'dark'
});

export const useMode = () => {
  const [mode, setMode] = useState<'dark'|'light'>("dark");
		
	const colorMode = useMemo(
	
		() => ({
			toggleColorMode: () => { setMode((prev) => (prev === "light" ? "dark" : "light")) }, mode
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

