export default function Aside(props) {
  const data = props.data;

  const articles = data.articles.map((article, index) => (
    <article
      className="relative py-[1.9375rem] before:bg-grayish-blue last:pb-0 before:[&:not(:last-child)]:absolute before:[&:not(:last-child)]:bottom-[-0.125rem] before:[&:not(:last-child)]:h-[0.0625rem] before:[&:not(:last-child)]:w-full"
      key={index}
    >
      <a
        href="#"
        className="text-xl font-bold text-off-white transition-colors hover:text-soft-orange"
      >
        <h3>{article.title}</h3>
      </a>
      <p className="mt-[0.4375rem] leading-relaxed text-grayish-blue">
        {article.text}
      </p>
    </article>
  ));

  return (
    <aside className="bg-very-dark-blue px-[1.3125rem] py-[1.5625rem] tablet:py-[2rem] tablet:pl-[1.5625rem] tablet:pr-[1.6875rem]">
      <h2 className="text-[2rem] font-bold leading-none text-soft-orange tablet:text-[2.5rem]">
        {data.title}
      </h2>
      {articles}
    </aside>
  );
}
