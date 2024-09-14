import { SupportedLocale } from "@/entities/common";
import { processList } from "@/entities/process";
import { Caveat } from "next/font/google";
import Section from "../section/Section";

const caveatFont = Caveat({ subsets: ["latin"] });

export default async function SectionProcess() {
  const content = await fetchPageContent(SupportedLocale.Th);

  return (
    <Section
      title={content.title}
      titleBg={content.titleBg}
      id="process"
    >
      <div className="grid md:grid-cols-2 px-8 md:px-12 xl:px-16 gap-8 md:gap-12 xl:gap-16">
        {content.processList.map((p, idx) => (
          <div
            key={p.id}
            className={`flex flex-col px-4 md:px-6 xl:px-8 py-8 md:py-12 xl:py-16 gap-6 md:gap-9 xl:gap-[43px] w-full max-w-[500px] rounded-3xl border-[2px] xl:border-[3px] border-black ${
              idx % 2 === 0 ? "justify-self-end" : "justify-self-start"
            }`}
          >
            <div
              className="bg-cover bg-center size-28"
              style={{
                backgroundImage: `url(${
                  p.imageUrl || `https://picsum.photos/200/200?attnmd=${p.id}`
                })`,
              }}
            ></div>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <h3 className="font-semibold text-2xl xl:text-[2rem]">
                  0{idx + 1} {p.title}
                </h3>
                <span
                  className={`absolute bottom-0 right-0 rotate-[10deg] font-bold text-[2.5rem] xl:text-[4rem] text-accent-six ${caveatFont.className}`}
                >
                  {p.titleBg}
                </span>
              </div>
              <div className="h-[2px] xl:h-[3px] w-full bg-black"></div>
              <p className="text-base xl:text-xl">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

async function fetchPageContent(locale?: SupportedLocale) {
  return {
    title: "การทำงานของชิวาวัน",
    titleBg: "process",
    processList: locale
      ? processList.filter((p) => p.locale === locale)
      : processList,
  };
}
