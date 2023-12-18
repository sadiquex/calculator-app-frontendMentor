import Calculator from "./components/Calculator";
import { useState } from "react";
import useTheme from "./components/hooks/useTheme";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("theme1");

  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <div
      className={`h-[100vh] flex flex-col items-center md:justify-center ${themeClasses.mainBackground}`}
    >
      <div className="flex justify-between items-center sm:w-[330px] md:w-[400px]">
        <span className={`text-[40px] ${themeClasses.inputTextColor}`}>
          calc
        </span>
        <ThemeSwitcher
          onThemeChange={handleThemeChange}
          currentTheme={currentTheme}
          themeClasses={themeClasses}
        />
      </div>

      <Calculator theme={themeClasses} />
    </div>
  );
}
