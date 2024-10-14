import { socialNetworkIndex } from "@/content/social-network";
import { getTranslations } from "next-intl/server";
import SectionTitle from "../section/SectionTitle";

const lineSocialNetwork = socialNetworkIndex["line"];

export default async function SectionCta() {
  const t = await getTranslations("SectionCta");

  return (
    <section className="flex flex-col px-4 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 gap-8 md:gap-12 lg:gap-16 bg-accent-six">
      <SectionTitle>{t("title")}</SectionTitle>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[37px]">
        <a
          href={lineSocialNetwork.url}
          target="_blank"
          className="text-white px-4 md:px-6 py-2 md:py-4 font-bold text-base md:text-[1.75rem] xl:text-[1.75rem] bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
