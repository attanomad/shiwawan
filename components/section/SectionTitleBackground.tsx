import { PropsWithChildren } from "react";

export default function SectionTitleBackground({
  children,
}: PropsWithChildren) {
  return (
    <div className="absolute flex justify-center overflow-hidden -z-10 tracking-[.35em] top-0 left-0 w-full text-accent-three text-sectionTitleBg font-black opacity-40 uppercase font-en">
      <span>{children}</span>
    </div>
  );
}
