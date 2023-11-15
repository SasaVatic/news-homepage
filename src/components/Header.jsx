import { useLayoutEffect, useRef } from "react";
import Navigation from "./Navigation";
import gsap from "gsap";

export default function Header(props) {
  const headerEl = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headerEl.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
        clearProps: "all",
      });
    }, headerEl);

    return () => ctx.revert();
  }, []);

  return (
    <header
      className="mx-auto overflow-hidden px-4 pt-7 desktop:container tablet:pt-[3.6875rem] desktop:pt-[5.5625rem]"
      ref={headerEl}
    >
      <Navigation data={props.data} />
    </header>
  );
}
