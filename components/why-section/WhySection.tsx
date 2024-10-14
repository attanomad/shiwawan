import { SupportedLocale } from "@/entities/common";
import { Reason, reasonList } from "@/entities/why";
import { getLocale, getTranslations } from "next-intl/server";
import Section from "../section/Section";

export default async function WhySection() {
  const locale = (await getLocale()) as SupportedLocale;
  const t = await getTranslations("WhySection");
  const content = await fetchPageContent(locale);

  return (
    <Section
      title={t("title")}
      titleBg={t("titleBg")}
      id="why"
    >
      {content.reasonList.map((r, idx) => (
        <ReasonItem
          key={r.id}
          reason={r}
          reverse={idx % 2 > 0}
        />
      ))}
    </Section>
  );
}

function ReasonItem({
  reason: { title, tagline, description, imageUrl, id },
  reverse,
}: {
  reason: Reason;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row p-8 md:px-8 md:py-16 gap-8 max-w-screen-xl mx-auto${
        reverse ? " md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex justify-center items-center w-full">
        <div
          className="bg-cover bg-center size-[250px] sm:size-[400px] max-size-[450px]"
          style={{
            backgroundImage: `url(${
              imageUrl || `https://picsum.photos/600/600?attnmd=${id}`
            })`,
          }}
        ></div>
      </div>
      <div
        className={`flex flex-col gap-2 sm:gap-4 w-full text-text-primary${
          reverse ? " md:text-right" : ""
        }`}
      >
        <p className="font-semibold text-lg sm:text-xl">{tagline}</p>
        <p className="font-medium text-2xl sm:text-[2rem]">{title}</p>
        <p className="text-lg sm:text-xl">{description}</p>
      </div>
    </div>
  );
}

async function fetchPageContent(locale?: SupportedLocale) {
  return {
    reasonList: locale
      ? reasonList.filter((r) => r.locale === locale)
      : reasonList,
  };
}
