import LogoImg from "../assets/images/logo.svg";
import IconClosed from "../assets/images/icon-menu-close.svg";
import IconOpen from "../assets/images/icon-menu.svg";
import { useRef } from "react";
import gsap from "gsap";

export default function Navigation(props) {
  const isOpen = useRef(false);
  const navList = useRef(null);
  const imgClosed = useRef(null);
  const imgOpen = useRef(null);
  const navElement = useRef(null);
  const overlay = useRef(null);

  const navListItems = props.data.links.map((link, index) => (
    <li key={index}>
      <a
        href={link.href}
        className="transition-colors hover:text-soft-red"
        onClick={closeMenu}
      >
        {link.label}
      </a>
    </li>
  ));

  function closeMenu() {
    isOpen.current = false;
    navList.current.classList.add("translate-x-full");
    imgOpen.current.classList.remove("scale-0");
    imgClosed.current.classList.add("scale-0");
    overlay.current.classList.add("translate-x-full");
    overlay.current.classList.add("opacity-0");
  }

  function openMenu() {
    isOpen.current = true;
    navList.current.classList.remove("translate-x-full");
    imgOpen.current.classList.add("scale-0");
    imgClosed.current.classList.remove("scale-0");
    overlay.current.classList.remove("translate-x-full");
    overlay.current.classList.remove("opacity-0");
    gsap.from("li", { xPercent: 100, opacity: 0, stagger: 0.1 });
  }

  function handleBtnClick() {
    if (isOpen.current) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  return (
    <nav ref={navElement} className="items-center justify-between tablet:flex">
      <a href="#">
        <img
          src={LogoImg}
          alt="Big bold black W letter with dot at the end"
          className="w-[2.875rem] tablet:w-[4.0625rem]"
        />
      </a>
      <ul
        className="fixed right-0 top-0 z-20 h-full w-full max-w-[16.0625rem] translate-x-full space-y-5 bg-linen px-6 pt-[8.875rem] text-lg text-very-dark-blue transition-transform tablet:static tablet:flex tablet:w-auto tablet:max-w-none tablet:translate-x-0 tablet:gap-[2.4375rem] tablet:space-y-0 tablet:px-0 tablet:pt-0 tablet:text-base tablet:text-dark-grayish-blue"
        ref={navList}
      >
        {navListItems}
      </ul>
      <button onClick={handleBtnClick} className="tablet:hidden">
        <img
          src={IconClosed}
          alt=""
          className="fixed right-5 top-7 z-30 scale-0 transition-transform "
          ref={imgClosed}
        />
        <img
          src={IconOpen}
          alt=""
          className="fixed right-4 top-[2.125rem] z-20 transition-transform"
          ref={imgOpen}
        />
      </button>
      <div
        className="fixed left-0 top-0 z-10 h-screen w-screen translate-x-full bg-very-dark-blue bg-opacity-40 opacity-0 transition-opacity [transition:opacity_0.5s]"
        ref={overlay}
      ></div>
    </nav>
  );
}
