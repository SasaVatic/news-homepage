import LogoImg from '../assets/images/logo.svg';
import IconClosed from '../assets/images/icon-menu-close.svg';
import IconOpen from '../assets/images/icon-menu.svg';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navigation(props) {
  const isOpen = useRef(false);
  const navList = useRef(null);
  const imgClosed = useRef(null);
  const imgOpen = useRef(null);
  const navElement = useRef(null);

  const navListItems = props.data.links.map((link, index) => (
    <li key={index}>
      <a href={link.href} className="hover:underline">
        {link.label}
      </a>
    </li>
  ));

  function handleBtnClick() {
    isOpen.current = !isOpen.current;

    if (!isOpen.current) {
      navList.current.classList.add('translate-x-full');
      imgOpen.current.classList.remove('scale-0');
      imgClosed.current.classList.add('scale-0');
      gsap.to('li', { xPercent: 100, opacity: 0 });
    } else {
      navList.current.classList.remove('translate-x-full');
      imgOpen.current.classList.add('scale-0');
      imgClosed.current.classList.remove('scale-0');
      gsap.to('li', { xPercent: 0, opacity: 1, stagger: 0.1 });
    }
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('li', { xPercent: 100, opacity: 0 });
    }, navElement);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navElement}>
      <a href="#">
        <img src={LogoImg} alt="" className="w-[2.875rem]" />
      </a>
      <ul
        className="fixed h-full w-full bg-linen max-w-[16.0625rem] right-0 top-0 px-6 text-lg pt-[8.875rem] space-y-5 translate-x-full transition-transform"
        ref={navList}
      >
        {navListItems}
      </ul>
      <button onClick={handleBtnClick}>
        <img
          src={IconClosed}
          alt=""
          className="fixed top-7 right-5 scale-0 transition-transform"
          ref={imgClosed}
        />
        <img
          src={IconOpen}
          alt=""
          className="fixed top-[2.125rem] right-4 transition-transform"
          ref={imgOpen}
        />
      </button>
    </nav>
  );
}
