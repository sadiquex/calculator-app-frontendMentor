import Calculator from "./components/Calculator";
import { useState } from "react";
import useTheme from "./components/hooks/useTheme";

const themes = ["theme1", "theme2", "theme3"];

export default function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div
      className={`bg-theme1MainBackground h-[100vh] flex flex-col items-center lg:justify-center ${themeClasses.mainBackground}`}
    >
      <Calculator theme={themeClasses} />

      <div>
        {themes.map((theme, i) => (
          <button
            key={i}
            className="bg-green-300 m-4"
            onClick={() => {
              setCurrentTheme(themes[i]);
            }}
          >
            theme {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
