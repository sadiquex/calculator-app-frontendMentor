import Calculator from "./components/Calculator";
import { useState } from "react";
import useTheme from "./components/hooks/useTheme";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  const themes = ["theme1", "theme2", "theme3"];
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div
      className={`h-[100vh] flex flex-col items-center md:justify-center ${themeClasses.mainBackground}`}
    >
      <div>
        {themes.map((theme, i) => (
          <button
            key={i}
            className={`m-4 ${
              currentTheme === theme ? "bg-green-300" : "bg-yellow-300"
            }`}
            onClick={() => {
              setCurrentTheme(themes[i]);
            }}
          >
            theme {i + 1}
          </button>
        ))}
      </div>
      <Calculator theme={themeClasses} />
    </div>
  );
}
