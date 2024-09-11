import { PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
  return (
    <h2 className="mx-auto text-center text-5xl max-w-[486px] font-bold text-text-primary leading-normal">
      {children}
    </h2>
  );
}
