/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        // Theme 1
        theme1MainBackground: "hsl(222, 26%, 31%)",
        theme1ToggleBackground: "hsl(223, 31%, 20%)",
        theme1KeypadBackground: "hsl(223, 31%, 20%)",
        theme1ScreenBackground: "hsl(224, 36%, 15%)",
        theme1Delete_ResetKeyBackground: "hsl(225, 21%, 49%)",
        theme1Delete_ResetKeyShadow: "hsl(224, 28%, 35%)",
        theme1RedKeyBackground: "hsl(6, 63%, 50%)",
        theme1RedKeyShadow: "hsl(6, 70%, 34%)",
        theme1NumberKeyBackground: "hsl(30, 25%, 89%)",
        theme1NumberKeyShadow: "hsl(28, 16%, 65%)",
        theme1TextDark: "hsl(221, 14%, 31%)",
        theme1TextWhite: "hsl(0, 0%, 100%)",

        // Theme 2
        theme2MainBackground: "hsl(0, 0%, 90%)",
        theme2ToggleBackground: "hsl(0, 5%, 81%)",
        theme2KeypadBackground: "hsl(0, 5%, 81%)",
        theme2ScreenBackground: "hsl(0, 0%, 93%)",
        theme2Delete_ResetBackground: "hsl(185, 42%, 37%)",
        theme2Delete_ResetShadow: "hsl(185, 58%, 25%)",
        theme2OrangeKeyBackground: "hsl(25, 98%, 40%)",
        theme2OrangeKeyShadow: "hsl(25, 99%, 27%)",
        theme2NumberKeyBackground: "hsl(45, 7%, 89%)",
        theme2NumberKeyShadow: "hsl(35, 11%, 61%)",
        theme2TextDark: "hsl(60, 10%, 19%)",
        theme2TextWhite: "hsl(0, 0%, 100%)",

        // Theme 3
        theme3MainBackground: "hsl(268, 75%, 9%)",
        theme3ToggleBackground: "hsl(268, 71%, 12%)",
        theme3KeypadBackground: "hsl(268, 71%, 12%)",
        theme3ScreenBackground: "hsl(268, 71%, 12%)",
        theme3Delete_ResetBackground: "hsl(281, 89%, 26%)",
        theme3Delete_ResetShadow: "hsl(285, 91%, 52%)",
        theme3CyanKeyBackground: "hsl(176, 100%, 44%)",
        theme3CyanKeyShadow: "hsl(177, 92%, 70%)",
        theme3NumberKeyBackground: "hsl(268, 47%, 21%)",
        theme3NumberKeyShadow: "hsl(290, 70%, 36%)",
        theme3TextYellow: "hsl(52, 100%, 62%)",
        theme3TextDarkBlue: "hsl(198, 20%, 13%)",
        theme3TextWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
