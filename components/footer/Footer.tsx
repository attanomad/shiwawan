import { socialNetworks } from "@/content/social-network";
import { getTranslations } from "next-intl/server";

const content = {
  social: {
    title: "พบเราได้ที่",
    socialList: socialNetworks,
  },
  copyright: "© 2024 All Rights Reserved.",
};

export default async function Footer() {
  const t = await getTranslations("Footer");
  const copyright = `© ${new Date().getFullYear()} ${t("copyRightsReserved")}`;

  return (
    <footer className="bg-accent-five">
      <div className="flex gap-8 md:flex-row justify-between items-end md:items-end px-8 xl:px-16 py-16 xl:py-32 text-white">
        <div>
          <p className="font-bold text-lg xl:text-2xl">{t("social.title")}:</p>
          <ul className="text-sm xl:text-xl mt-[10px]">
            {content.social.socialList.map((s) => (
              <li key={s.id}>
                <a href={s.url}>{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs md:text-base">{copyright}</p>
      </div>

      {/* Nav Bar Placeholder */}
      <div className="w-full h-[50px]"></div>
    </footer>
  );
}
