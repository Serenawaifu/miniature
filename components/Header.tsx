import Logo from './Logo';
import SearchBar from './SearchBar';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Logo />
        <div className="flex items-center space-x-2">
          <SearchBar />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
