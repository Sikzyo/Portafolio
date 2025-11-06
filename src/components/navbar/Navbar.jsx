import { useEffect, useRef } from "react";

// Custom hook
import useNavbar from "../../hooks/useNavbar.js";

export default function Navbar() {
  const isOpen = useNavbar((state) => state.isOpen);
  const closeMenu = useNavbar((state) => state.closeMenu);

  const isItem = useNavbar((state) => state.item);
  const setItem = useNavbar((state) => state.setItem);

  const isSelect = useNavbar((state) => state.isSelect);
  const setSelect = useNavbar((state) => state.setSelect);

  const botones = [
    { name: "Inicio", url: "/" },
    { name: "Sobre mí", url: "/about" },
    { name: "Hoja de vida", url: "/docs/cv_jair_ochoa.pdf" },
  ];

  const refs = useRef([]);

  useEffect(() => {
    const pathName = window.location.pathname;
    setItem(botones.findIndex((button) => button.url === pathName));
  }, []);

  useEffect(() => {
    const currentRef = refs.current[isItem];
    if (currentRef) {
      const { offsetLeft, offsetWidth } = currentRef;
      setSelect({ left: offsetLeft, width: offsetWidth });
    }
  }, [isItem]);

  return (
    <nav
      className={`fixed top-0 h-full w-full transition-all duration-300 ease-in-out bg-linear-to-b from-fondo-1/75 from-50% to-fondo-2/75 backdrop-blur-sm px-6 pt-24 pb-6 md:static md:flex md:px-2 md:py-2 md:w-fit md:gap-4 md:bg-none md:bg-botones/75 md:rounded-xl ${
        isOpen ? "right-0" : "right-full"
      }`}
    >
      <section className="flex flex-col gap-4 relative md:flex-row md:text-nowrap">
        {botones.map((button, index) => {
          return (
            <a
              href={button.url}
              className={`flex w-full h-11 items-center text-2xl font-manrope text-texto-2 font-bold  md:px-4 md:text-base md:rounded-lg z-10 cursor-pointer transition-all duration-300 ease-in-out ${
                isItem === index
                  ? "md:text-botones md:bg-texto-2 "
                  : "md:text-texto-2"
              }`}
              key={index}
              onClick={() => {
                setItem(index);
                closeMenu();
              }}
              ref={(a) => {
                refs.current[index] = a;
              }}
            >
              {button.name}
            </a>
          );
        })}
        {/* <div
          className="hidden md:block absolute transition-all duration-300 ease-in-out bg-texto-2 h-11 rounded-lg cursor-none"
          style={{
            width: `${isSelect.width}px`,
            transform: `translateX(${isSelect.left}px)`,
          }}
        ></div> */}
      </section>
    </nav>
  );
}
