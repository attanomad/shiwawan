import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="mx-auto px-4 text-center text-[2rem] sm:text-4xl md:text-5xl xl:text-5xl max-w-[486px] font-bold text-text-primary leading-normal">
      {children}
    </h2>
  );
}
