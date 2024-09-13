import { HTMLProps } from "react";
import SectionTitle from "./SectionTitle";
import SectionTitleBackground from "./SectionTitleBackground";

export default function Section({
  title,
  titleBg,
  children,
  className,
  ...rest
}: HTMLProps<HTMLElement> & { title: string; titleBg: string }) {
  return (
    <section
      className={`relative flex flex-col gap-8 md:gap-y-16 xl:gap-y-32 py-10 md:py-14 xl:py-24${className}`}
      {...rest}
    >
      <SectionTitle>{title}</SectionTitle>
      <SectionTitleBackground>{titleBg}</SectionTitleBackground>
      {children}
    </section>
  );
}
