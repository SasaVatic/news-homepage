import { useLayoutEffect } from "react";

export default function Loader(props) {
  useLayoutEffect(() => {
    if (props.data) {
      setTimeout(() => {
        props.setLoadedState();
      }, 1000);
    }
  }, [props.data]);

  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center">
      <div className="absolute h-[8vw] min-h-[6.25rem] w-[8vw] min-w-[6.25rem] animate-bounce rounded-full bg-soft-red"></div>
      <div className="absolute h-[8vw] min-h-[6.25rem] w-[8vw] min-w-[6.25rem] animate-pulse rounded-full bg-very-dark-blue opacity-5"></div>
    </div>
  );
}
