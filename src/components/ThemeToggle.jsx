import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

/**
 * ThemeToggle Component — A sleek, editorial-style button
 * to switch between Light Mode and Dark Mode with smooth micro-animations.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      <div className={`theme-toggle-icon-wrap ${theme}`}>
        {theme === 'light' ? (
          <FaMoon className="theme-toggle-icon moon" />
        ) : (
          <FaSun className="theme-toggle-icon sun" />
        )}
      </div>
    </button>
  );
}
