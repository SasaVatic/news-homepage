import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <header className="mx-auto px-4 pt-7 desktop:container tablet:pt-[3.6875rem] desktop:pt-[5.5625rem]">
      <Navigation data={props.data} />
    </header>
  );
}
