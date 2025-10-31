import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

// Custom hook
import useNavbar from "../../hooks/useNavbar.js";

export default function HamburgerButton() {
  const toggleMenu = useNavbar((state) => state.toggleMenu);
  const isOpen = useNavbar((state) => state.isOpen);

  return (
    <button
      className="flex items-center justify-center w-11 h-11 bg-botones/75 rounded-lg text-texto-2 z-10 backdrop-blur-sm md:hidden"
      onClick={toggleMenu}
    >
      <Cross1Icon
        className={`absolute transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <HamburgerMenuIcon
        className={`absolute transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
    </button>
  );
}
