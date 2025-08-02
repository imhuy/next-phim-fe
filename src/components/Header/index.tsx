"use client";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCategoryChange }) => {
  return (
    <header className="bg-black text-white">
      <DesktopHeader onSearch={onSearch} onCategoryChange={onCategoryChange} />
      <MobileHeader onSearch={onSearch} onCategoryChange={onCategoryChange} />
    </header>
  );
};

export default Header;
