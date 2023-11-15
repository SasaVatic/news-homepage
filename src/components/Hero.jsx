import HeroImgSmall from "../assets/images/image-web-3-mobile.jpg";
import HeroImgLarge from "../assets/images/image-web-3-desktop.jpg";
import Aside from "./Aside";
import Card from "./Card";
import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function Hero(props) {
  const data = props.data;
  const [timeline, setTimeline] = useState(null);
  const comp = useRef(null);
  const pictureEl = useRef(null);
  const headingEl = useRef(null);
  const paragraphEl = useRef(null);
  const buttonEl = useRef(null);
  const asideEl = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline().delay(0.5);
      setTimeline(tl);

      tl.from(
        pictureEl.current,
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "sine.out",
        },
        ">-0.1",
      )
        .from(
          asideEl.current,
          {
            yPercent: -100,
            opacity: 0,
            duration: 0.5,
            ease: "sine.out",
          },
          ">-0.1",
        )
        .from(
          paragraphEl.current,
          {
            xPercent: -100,
            opacity: 0,
            duration: 0.5,
            ease: "sine.out",
          },
          ">-0.1",
        )
        .from(
          buttonEl.current,
          {
            xPercent: -100,
            opacity: 0,
            duration: 0.5,
            ease: "sine.out",
          },
          ">-0.5",
        )
        .from(
          headingEl.current,
          {
            xPercent: -100,
            opacity: 0,
            duration: 0.5,
            ease: "sine.out",
          },
          ">-0.1",
        );
    }, comp);

    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback(
    (animation) => {
      timeline && timeline.add(animation);
    },
    [timeline],
  );

  const cards = data.cards.map((card, index) => (
    <Card
      imgURL={card.imgURL}
      title={card.title}
      text={card.text}
      number={index + 1}
      key={index}
      addAnimation={addAnimation}
    />
  ));

  return (
    <section
      className="grid-cols-3 gap-7 overflow-hidden pb-[5rem] pt-2 tablet:grid tablet:pt-[3.4375rem]"
      ref={comp}
    >
      <picture className="col-span-2 block max-h-96 overflow-hidden" ref={pictureEl}>
        <source srcSet={HeroImgLarge} media="(min-width: 768px)" />
        <img
          src={HeroImgSmall}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </picture>
      <h1
        className="mt-[1.5625rem] max-w-[31.25rem] text-[2.5rem] font-extrabold leading-none tablet:mt-[0.375rem] tablet:text-[3.5rem]"
        ref={headingEl}
      >
        {data.title}
      </h1>
      <div className="mt-4 overflow-hidden tablet:mt-0">
        <p
          className="mb-[1.625rem] max-w-[31.25rem] leading-[1.7] text-dark-grayish-blue tablet:mb-[2.4375rem] tablet:leading-[1.6]"
          ref={paragraphEl}
        >
          {data.text}
        </p>
        <a
          href="#"
          className="inline-block bg-soft-red px-[1.9375rem] py-[0.875rem] text-sm font-bold uppercase tracking-[0.275rem] text-off-white transition-colors hover:bg-very-dark-blue"
          ref={buttonEl}
        >
          {data.btnText}
        </a>
      </div>

      <div
        className="col-span-1 col-start-3 row-span-2 row-start-1 mt-16 max-w-[37.5rem] tablet:mt-0"
        ref={asideEl}
      >
        <Aside data={data.aside} />
      </div>

      <div className="col-span-3 mt-[4.0625rem] flex flex-wrap gap-[2.1875rem] tablet:mt-[2.6875rem]">
        {cards}
      </div>
    </section>
  );
}
