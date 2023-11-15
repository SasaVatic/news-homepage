import HeroImgSmall from "../assets/images/image-web-3-mobile.jpg";
import HeroImgLarge from "../assets/images/image-web-3-desktop.jpg";
import Aside from "./Aside";
import Card from "./Card";

export default function Hero(props) {
  const data = props.data;

  const cards = data.cards.map((card, index) => (
    <Card
      imgURL={card.imgURL}
      title={card.title}
      text={card.text}
      number={index + 1}
      key={index}
    />
  ));

  return (
    <section className="pb-[5rem] pt-2">
      <picture>
        <source srcSet={HeroImgLarge} media="(min-width: 768px)" />
        <img src={HeroImgSmall} alt="" aria-hidden="true" />
      </picture>
      <h1 className="mt-[1.5625rem] text-[2.5rem] font-extrabold leading-none">
        {data.title}
      </h1>
      <div className="mt-4">
        <p className="mb-[1.625rem] leading-[1.7] text-dark-grayish-blue">
          {data.text}
        </p>
        <a
          href="#"
          className="inline-block bg-soft-red px-[1.9375rem] py-[0.875rem] text-sm font-bold uppercase tracking-[0.275rem] text-off-white transition-colors hover:bg-very-dark-blue"
        >
          {data.btnText}
        </a>
      </div>

      <div className="mt-16">
        <Aside data={data.aside} />
      </div>

      <div className="mt-[4.0625rem] space-y-[2.1875rem]">{cards}</div>
    </section>
  );
}
