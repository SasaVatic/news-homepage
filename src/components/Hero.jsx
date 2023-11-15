import HeroImgSmall from "../assets/images/image-web-3-mobile.jpg";
import HeroImgLarge from "../assets/images/image-web-3-desktop.jpg";

export default function Hero(props) {
  const data = props.data;
  return (
    <section className="pt-2">
      <picture>
        <source srcSet={HeroImgLarge} media="(min-width: 768px)" />
        <img src={HeroImgSmall} alt="" />
      </picture>
      <h1 className="mt-[1.5625rem] text-[2.5rem] font-extrabold leading-none">
        {data.title}
      </h1>
      <div>
        <p className="mb-[1.625rem] mt-4 leading-[1.7] text-dark-grayish-blue">
          {data.text}
        </p>
        <a
          href="#"
          className="inline-block bg-soft-red px-[31px] py-[14px] text-sm font-bold uppercase tracking-[4.4px] text-off-white transition-colors hover:bg-very-dark-blue"
        >
          {data.btnText}
        </a>
      </div>

      <div>aside goes here</div>

      <div>cards go here</div>
    </section>
  );
}
