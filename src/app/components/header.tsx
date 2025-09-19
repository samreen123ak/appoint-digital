import Image from "next/image";
import MenuManager from "./menuComponents/menumanager";

export default function Header() {
  return (
    <header className=" sticky top-0 w-full bg-bg z-[9999] shadow-md">
      {/* Desktop / Tablet Header */}
      <div
        className="hidden sm:flex items-center justify-between 
                   px-6 md:px-10 py-4 md:py-6 
                   max-w-full"
      >
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={300}
          height={300}
          className="w-28  flex-shrink-0"
        />

        {/* Menu */}
        <div className="flex items-center">
          <MenuManager />
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className="flex sm:hidden items-center justify-between 
                   px-4 py-3 max-w-full"
      >
        {/* Smaller Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-12  flex-shrink-0"
        />

        {/* Mobile Menu (can later add a hamburger if needed) */}
        <div className="flex items-center">
          <MenuManager />
        </div>
      </div>
    </header>
  );
}
