import { toggleTheme } from "../redux/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      Toggle {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeSwitcher;
