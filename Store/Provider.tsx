 "use client";

import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a0a",
      paper: "rgba(255,255,255,0.06)",
    },
    text: {
      primary: "#ededed",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}


