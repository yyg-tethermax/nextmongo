"use client";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // 기본 색상
    },
    secondary: {
      main: "#dc004e", // 보조 색상
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // 기본 폰트
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // 버튼 모양 커스터마이징
        },
      },
    },
  },
});

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
