import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Card({ imgURL, title, text, number, addAnimation }) {
  let cardNumber = number;
  const card = useRef(null);

  if (number < 10) {
    cardNumber = "0" + number;
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.from(card.current, {
        x: "50vw",
        opacity: 0,
        duration: 0.3,
        ease: "sine.out",
      });
      addAnimation(animation);
    });

    return () => ctx.revert();
  }, [addAnimation]);

  return (
    <div className="flex max-w-[21.5625rem] gap-6" ref={card}>
      <img
        src={imgURL}
        alt=""
        aria-hidden="true"
        className="max-w-[6.25rem] self-start"
      />
      <div>
        <span className="text-3xl font-extrabold leading-none text-grayish-blue">
          {cardNumber}
        </span>
        <a
          href="#"
          className="mt-[0.6875rem] block text-lg font-extrabold text-very-dark-blue transition-colors hover:text-soft-red"
        >
          <h3>{title}</h3>
        </a>
        <p className="mt-[0.4375rem] leading-relaxed text-dark-grayish-blue">
          {text}
        </p>
      </div>
    </div>
  );
}
