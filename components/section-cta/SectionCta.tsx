import SectionTitle from "../section/SectionTitle";

const content = {
  title: "มีโปรเจกต์ในใจใช่ไหม?",
  cta: "พูดคุยกับเรา",
};

export default function SectionCta() {
  return (
    <section className="flex flex-col px-8 xl:px-16 py-16 xl:py-32 gap-8 xl:gap-16 bg-accent-six">
      <SectionTitle>{content.title}</SectionTitle>
      <div className="flex flex-col justify-center items-center text-xl xl:text-[1.75rem] gap-2 md:gap-4 xl:gap-[37px]">
        <button className="text-white px-6 py-4 bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]">
          {content.cta}
        </button>
      </div>
    </section>
  );
}
