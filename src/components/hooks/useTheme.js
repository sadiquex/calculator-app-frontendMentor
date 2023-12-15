const useTheme = () => {
  const getThemeClasses = (theme) => {
    switch (theme) {
      case "theme1":
        return {
          mainBackground: "bg-theme1MainBackground",
          toggleBackground: "bg-theme1ToggleBackground",
          keypadBackground: "bg-theme1KeypadBackground",
          screenBackground: "bg-theme1ScreenBackground",
          delete_ResetKeyBackground: "bg-theme1Delete_ResetKeyBackground",
          delete_ResetKeyShadow: "shadow-theme1Delete_ResetKeyShadow",
          equalsKeyBackground: "bg-theme1RedKeyBackground",
          equalsKeyShadow: "shadow-theme1RedKeyShadow",
          numberKeyBackground: "bg-theme1NumberKeyBackground",
          numberKeyShadow: "shadow-theme1NumberKeyShadow",
          textDark: "text-theme1TextDark",
          textWhite: "text-theme1TextWhite",
        };
      case "theme2":
        return {
          mainBackground: "bg-theme2MainBackground",
          toggleBackground: "bg-theme2ToggleBackground",
          keypadBackground: "bg-theme2KeypadBackground",
          screenBackground: "bg-theme2ScreenBackground",
          delete_ResetKeyBackground: "bg-theme2Delete_ResetBackground",
          delete_ResetKeyShadow: "shadow-theme2Delete_ResetShadow",
          equalsKeyBackground: "bg-theme2OrangeKeyBackground",
          equalsKeyShadow: "shadow-theme2OrangeKeyShadow",
          numberKeyBackground: "bg-theme2NumberKeyBackground",
          numberKeyShadow: "shadow-theme2NumberKeyShadow",
          textDark: "text-theme2TextDark",
          textWhite: "text-theme2TextWhite",
        };
      case "theme3":
        return {
          mainBackground: "bg-theme3MainBackground",
          toggleBackground: "bg-theme3ToggleBackground",
          keypadBackground: "bg-theme3KeypadBackground",
          screenBackground: "bg-theme3ScreenBackground",
          delete_ResetKeyBackground: "bg-theme3Delete_ResetBackground",
          delete_ResetKeyShadow: "shadow-theme3Delete_ResetShadow",
          equalsKeyBackground: "bg-theme3CyanKeyBackground",
          equalsKeyShadow: "shadow-theme3CyanKeyShadow",
          numberKeyBackground: "bg-theme3NumberKeyBackground",
          numberKeyShadow: "shadow-theme3NumberKeyShadow",
          textDarkBlue: "text-theme3TextDarkBlue",
          textDark: "text-theme3TextYellow",
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

// case "theme1":
//     return {
//       mainBackground: "bg-theme1MainBackground",
//       toggleBackground: "bg-theme1ToggleBackground",
//       keypadBackground: "bg-theme1KeypadBackground",
//       screenBackground: "bg-theme1ScreenBackground",
//       delete_ResetKeyBackground: "bg-theme1Delete_ResetKeyBackground",
//       delete_ResetKeyShadow: "shadow-theme1Delete_ResetKeyShadow",
//       equalsKeyBackground: "bg-theme1RedKeyBackground",
//       equalsKeyShadow: "shadow-theme1RedKeyShadow",
//       numberKeyBackground: "bg-theme1NumberKeyBackground",
//       numberKeyShadow: "shadow-theme1NumberKeyShadow",
//       textDark: "text-theme1TextDark",
//       textWhite: "text-theme1TextWhite",
//     };
//   case "theme2":
//     return {
//       mainBackground: "bg-theme2MainBackground",
//       toggleBackground: "bg-theme2ToggleBackground",
//       keypadBackground: "bg-theme2KeypadBackground",
//       screenBackground: "bg-theme2ScreenBackground",
//       delete_ResetKeyBackground: "bg-theme2Delete_ResetBackground",
//       delete_ResetKeyShadow: "shadow-theme2Delete_ResetShadow",
//       equalsKeyBackground: "bg-theme2OrangeKeyBackground",
//       equalsKeyShadow: "shadow-theme2OrangeKeyShadow",
//       numberKeyBackground: "bg-theme2NumberKeyBackground",
//       numberKeyShadow: "shadow-theme2NumberKeyShadow",
//       textDark: "text-theme2TextDark",
//       textWhite: "text-theme2TextWhite",
//     };
//   case "theme3":
//     return {
//       mainBackground: "bg-theme3MainBackground",
//       toggleBackground: "bg-theme3ToggleBackground",
//       keypadBackground: "bg-theme3KeypadBackground",
//       screenBackground: "bg-theme3ScreenBackground",
//       delete_ResetKeyBackground: "bg-theme3Delete_ResetBackground",
//       delete_ResetKeyShadow: "shadow-theme3Delete_ResetShadow",
//       equalsKeyBackground: "bg-theme3CyanKeyBackground",
//       equalsKeyShadow: "shadow-theme3CyanKeyShadow",
//       numberKeyBackground: "bg-theme3NumberKeyBackground",
//       numberKeyShadow: "shadow-theme3NumberKeyShadow",
//       textDarkBlue: "text-theme3TextDarkBlue",
//       textDark: "text-theme3TextYellow",
//       textWhite: "text-theme3TextWhite",
//     };
