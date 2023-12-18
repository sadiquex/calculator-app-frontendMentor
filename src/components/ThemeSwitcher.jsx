const ThemeSwitcher = ({ onThemeChange, currentTheme, themeClasses }) => {
  const themes = ["theme1", "theme2", "theme3"];

  return (
    <div className={`rounded-full ${themeClasses.toggleBackground}`}>
      {themes.map((theme, i) => (
        <button
          key={i}
          className={`m-2 w-[20px] h-[20px] rounded-full ${
            themeClasses.keyTextColor
          } ${currentTheme === theme ? themeClasses.equalsKeyBackground : ""}`}
          onClick={() => {
            onThemeChange(themes[i]);
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
