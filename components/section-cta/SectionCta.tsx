import SectionTitle from "../section/SectionTitle";

const content = {
  title: "มีโปรเจกต์ในใจใช่ไหม?",
  cta: "พูดคุยกับเรา",
};

export default function SectionCta() {
  return (
    <section className="flex flex-col px-4 md:px-12 lg:px-16 py-16 md:py-24 lg:py-32 gap-8 md:gap-12 lg:gap-16 bg-accent-six">
      <SectionTitle>{content.title}</SectionTitle>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[37px]">
        <button className="text-white px-4 md:px-6 py-2 md:py-4 font-bold text-base md:text-[1.75rem] xl:text-[1.75rem] bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]">
          {content.cta}
        </button>
      </div>
    </section>
  );
}
