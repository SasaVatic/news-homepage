export default function Footer() {
  return (
    <footer className="mx-auto bg-very-dark-blue px-4 text-center text-sm text-grayish-blue tablet:container">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="font-bold text-off-white transition-colors hover:text-soft-orange hover:underline"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://sasavatic.netlify.app/"
        target="_blank"
        className="font-bold text-off-white transition-colors hover:text-soft-orange hover:underline"
      >
        Saša Vatić
      </a>
      .
    </footer>
  );
}
