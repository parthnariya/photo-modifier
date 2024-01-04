export interface ColorValues {
  primary: string;
  background: string;
  menuBG: string;
  toolbarBG: string;
  disableColor: string;
  borderColor: string;
}
// export type TypeOfTheme = "Dark" | "Default";
export type TypeOfTheme = "Default";

export const CustomTheme: Record<TypeOfTheme, ColorValues> = {
  Default: {
    background: "#1E1E1E",
    primary: "#eaeaea",
    menuBG: "#262626",
    borderColor: "#3f3f3f",
    disableColor: "#606060",
    toolbarBG: "#313131",
  },
};
export const getStyledComponentTheme = (theme: TypeOfTheme) => {
  return CustomTheme[theme];
};
