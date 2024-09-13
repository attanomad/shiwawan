import SectionTitle from "../section/SectionTitle";

const content = {
  title: "มีโปรเจกต์ในใจใช่ไหม?",
  cta: "พูดคุยกับเรา",
};

export default function SectionCta() {
  return (
    <section className="flex flex-col px-4 xl:px-16 py-16 xl:py-32 gap-8 xl:gap-16 bg-accent-six">
      <SectionTitle className="!text-2xl">{content.title}</SectionTitle>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-[37px]">
        <button className="text-white px-4 py-2 font-bold text-base xl:text-[1.75rem] bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]">
          {content.cta}
        </button>
      </div>
    </section>
  );
}
