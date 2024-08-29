import { toggleTheme } from "../redux/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FaToggleOn ,FaToggleOff  } from "react-icons/fa6";



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
      {isDarkMode ? <FaToggleOn /> : <FaToggleOff />} 
    </button>
  );
};

export default ThemeSwitcher;
