import { PropsWithChildren } from "react";

export default function SectionTitleBackground({
  children,
}: PropsWithChildren) {
  return (
    <div className="absolute flex justify-center overflow-hidden -z-10 tracking-[.35em] top-0 left-0 w-full text-accent-three text-[4rem] sm:text-7xl md:text-8xl xl:text-[8.75rem] font-black opacity-40 uppercase font-en">
      <span>{children}</span>
    </div>
  );
}
