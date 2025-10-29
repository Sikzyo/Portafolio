import { useState, useEffect, useRef } from "react";

export default function Navbar({ isOpen }) {
  const [isItem, setItem] = useState(0);
  const [isSelect, setSelect] = useState({ width: 0, left: 0 });

  const botones = ["Inicio", "Sobre mí", "Hoja de vida"];

  const refs = useRef([]);

  useEffect(() => {
    const currentRef = refs.current[isItem];
    if (currentRef) {
      const { offsetLeft, offsetWidth } = currentRef;
      setSelect({ left: offsetLeft, width: offsetWidth });
      console.log(isItem);
    }
  }, [isItem]);

  return (
    <nav
      className={`fixed top-0 h-full w-full transition-all duration-300 ease-in-out bg-linear-to-b from-fondo-1/75 from-50% to-fondo-2/75 backdrop-blur-sm px-6 pt-24 pb-6 md:static md:flex md:px-2 md:py-2 md:w-fit md:gap-4 md:bg-none md:bg-botones md:rounded-xl ${
        isOpen ? "right-0" : "right-full"
      }`}
    >
      <section className="flex flex-col gap-4 relative md:flex-row md:text-nowrap">
        {botones.map((button, index) => {
          return (
            <a
              className={`flex w-full h-11 items-center text-2xl font-manrope text-texto-2 font-bold  md:px-4 md:text-base md:rounded-lg z-10 cursor-pointer transition-all duration-300 ease-in-out ${
                isItem === index ? "md:text-botones" : "md:text-texto-2"
              }`}
              key={index}
              onClick={() => setItem(index)}
              ref={(a) => {
                refs.current[index] = a;
              }}
            >
              {button}
            </a>
          );
        })}
        <div
          className="hidden md:block absolute transition-all duration-300 ease-in-out bg-texto-2 h-11 rounded-lg cursor-none"
          style={{
            width: `${isSelect.width}px`,
            transform: `translateX(${isSelect.left}px)`,
          }}
        ></div>
      </section>
    </nav>
  );
}
