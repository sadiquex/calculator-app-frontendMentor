const useTheme = () => {
  const getThemeClasses = (theme) => {
    switch (theme) {
      case "theme1":
        return {
          mainBackground: "bg-theme1MainBackground",
          toggleBackground: "bg-theme1ToggleBackground",
          keypadBackground: "bg-theme1KeypadBackground",
          screenBackground: "bg-theme1ScreenBackground",
          keyBackground: "bg-theme1KeyBackground",
          keyShadow: "shadow-theme1KeyShadow",
          redKeyBackground: "bg-theme1RedKeyBackground",
          redKeyShadow: "shadow-theme1RedKeyShadow",
          orangeKeyBackground: "bg-theme1OrangeKeyBackground",
          orangeKeyShadow: "shadow-theme1OrangeKeyShadow",
          textDark: "text-theme1TextDark",
          textWhite: "text-theme1TextWhite",
        };
      case "theme2":
        return {
          mainBackground: "bg-theme2MainBackground",
          toggleBackground: "bg-theme2ToggleBackground",
          keypadBackground: "bg-theme2KeypadBackground",
          screenBackground: "bg-theme2ScreenBackground",
          keyBackground: "bg-theme2KeyBackground",
          keyShadow: "shadow-theme2KeyShadow",
          orangeKeyBackground: "bg-theme2OrangeKeyBackground",
          orangeKeyShadow: "shadow-theme2OrangeKeyShadow",
          yellowKeyBackground: "bg-theme2YellowKeyBackground",
          yellowKeyShadow: "shadow-theme2YellowKeyShadow",
          textDark: "text-theme2TextDark",
          textWhite: "text-theme2TextWhite",
        };
      case "theme3":
        return {
          mainBackground: "bg-theme3MainBackground",
          toggleBackground: "bg-theme3ToggleBackground",
          keypadBackground: "bg-theme3KeypadBackground",
          screenBackground: "bg-theme3ScreenBackground",
          keyBackground: "bg-theme3KeyBackground",
          keyShadow: "shadow-theme3KeyShadow",
          cyanKeyBackground: "bg-theme3CyanKeyBackground",
          cyanKeyShadow: "shadow-theme3CyanKeyShadow",
          violetKeyBackground: "bg-theme3VioletKeyBackground",
          violetKeyShadow: "shadow-theme3VioletKeyShadow",
          textYellow: "text-theme3TextYellow",
          textDarkBlue: "text-theme3TextDarkBlue",
          textWhite: "text-theme3TextWhite",
        };
      default:
        return {};
    }
  };

  //   const themeClasses = getThemeClasses();
  return { getThemeClasses };
};

export default useTheme;
