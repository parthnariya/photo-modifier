import { createContext, ReactElement, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getStyledComponentTheme, TypeOfTheme } from "./themeColors";

const themeCtx = createContext<{
  mode: TypeOfTheme;
  setMode: (mode: TypeOfTheme) => void;
}>({ mode: "Default", setMode: () => {} });

export function ThemeMode({ children }: { children: ReactElement }) {
  const [mode, setMode] = useState<TypeOfTheme>("Default");
  const themeHandler = (mode: TypeOfTheme) => {
    setMode(() => mode);
  };
  return (
    <themeCtx.Provider value={{ mode, setMode: themeHandler }}>
      {children}
    </themeCtx.Provider>
  );
}
const useThemeMode = () => useContext(themeCtx);

export const ThemeProviders = ({ children }: { children: ReactElement }) => {
  const theme = useThemeMode();
  return (
    <ThemeProvider theme={getStyledComponentTheme(theme.mode)}>
      {children}
    </ThemeProvider>
  );
};
