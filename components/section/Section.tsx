import { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";
import SectionTitleBackground from "./SectionTitleBackground";

export default function Section({
  title,
  titleBg,
  children,
}: PropsWithChildren<{ title: string; titleBg: string }>) {
  return (
    <section className="relative flex flex-col gap-8 xl:gap-y-32 py-10 md:py-14 xl:py-24">
      <SectionTitle>{title}</SectionTitle>
      <SectionTitleBackground>{titleBg}</SectionTitleBackground>
      {children}
    </section>
  );
}
