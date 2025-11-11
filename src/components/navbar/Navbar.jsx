import { useEffect, useRef } from "react";

// Custom hook
import useNavbar from "../../hooks/useNavbar.js";

// Componentes
import DarkMode from "../../components/darkMode.jsx";

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
      className={`fixed top-0 h-full w-full bg-linear-to-b from-white-bg-1/75 from-50% to-white-bg-2/75 dark:from-dark-bg-1/75 dark:to-dark-bg-2/75 backdrop-blur-sm px-6 pt-24 pb-6 md:static md:flex md:px-2 md:py-2 md:w-fit md:gap-4 md:bg-none md:bg-white-button/75 dark:md:bg-dark-button/75 md:rounded-xl ${
        isOpen ? "right-0" : "right-full"
      }`}
    >
      <section className="flex flex-col gap-4 relative md:flex-row md:text-nowrap">
        {botones.map((button, index) => {
          return (
            <a
              href={button.url}
              className={`flex w-full h-11 items-center text-2xl font-manrope text-white-orange dark:text-dark-purple font-bold  md:px-4 md:text-base md:rounded-lg z-10 cursor-pointer ${
                isItem === index
                  ? "md:text-white-button dark:md:text-dark-button md:bg-white-orange dark:md:bg-dark-purple"
                  : "md:text-white-orange dark:md:text-dark-purple"
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
        <section>
          <DarkMode></DarkMode>
        </section>
        {/* <div
          className="hidden md:block absolute transition-all duration-300 ease-in-out bg-white-orange dark:bg-dark-purple h-11 rounded-lg cursor-none"
          style={{
            width: `${isSelect.width}px`,
            transform: `translateX(${isSelect.left}px)`,
          }}
        ></div> */}
      </section>
    </nav>
  );
}
