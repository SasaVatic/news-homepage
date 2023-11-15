import HeroImgSmall from "../assets/images/image-web-3-mobile.jpg";
import HeroImgLarge from "../assets/images/image-web-3-desktop.jpg";
import Aside from "./Aside";

export default function Hero(props) {
  const data = props.data;
  return (
    <section className="pt-2">
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

      <div>cards go here</div>
    </section>
  );
}
