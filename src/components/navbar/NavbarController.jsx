// Componentes
import HamburgerButton from "./hamburgerButton.jsx";
import Navbar from "./Navbar.jsx";

import { useState } from "react";

export default function NavbarController() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} />
      <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
