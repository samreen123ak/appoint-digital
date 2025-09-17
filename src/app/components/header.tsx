import Image from "next/image";
import MenuManager from "./menuComponents/menumanager";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-bg z-[9999] shadow-md">
      <div className="flex justify-between items-center w-full">
        <Image src="/logo.svg" alt="Logo" width={120} height={120} />
        <MenuManager />
      </div>
    </header>
  );
}
