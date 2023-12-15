import Calculator from "./components/Calculator";
import { useState } from "react";
import useTheme from "./components/hooks/useTheme";

export default function App() {
  const { getThemeClasses } = useTheme();

  const themeClasses = getThemeClasses("theme1");

  return (
    // <div className="bg-theme1MainBackground h-[100vh] flex items-center justify-center">
    <div className={`${themeClasses.mainBackground}`}>
      <Calculator switchTheme={getThemeClasses} />
    </div>
  );
}
