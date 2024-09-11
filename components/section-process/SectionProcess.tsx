import { Caveat } from "next/font/google";
import Section from "../section/Section";

const caveatFont = Caveat({ subsets: ["latin"] });

interface Process {
  id: string;
  title: string;
  titleBg: string;
  description: string;
  imageUrl: string;
}
const content = {
  title: "การทำงานของชิวาวัน",
  titleBg: "process",
  processList: [
    {
      id: "1",
      title: "รวมความต้องการ",
      titleBg: "Requirements",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada dolor turpis augue pretium etiam consequat mauris sagittis. Fringilla magna quisque quis mauris sit neque.",
      imageUrl: "",
    },
    {
      id: "2",
      title: "ออกแบบ",
      titleBg: "Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada dolor turpis augue pretium etiam consequat mauris sagittis. Fringilla magna quisque quis mauris sit neque.",
      imageUrl: "",
    },
    {
      id: "3",
      title: "พัฒนา",
      titleBg: "Develop",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada dolor turpis augue pretium etiam consequat mauris sagittis. Fringilla magna quisque quis mauris sit neque.",
      imageUrl: "",
    },
    {
      id: "4",
      title: "ส่งมอบ",
      titleBg: "Launch",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices malesuada dolor turpis augue pretium etiam consequat mauris sagittis. Fringilla magna quisque quis mauris sit neque.",
      imageUrl: "",
    },
  ] as Process[],
};

export default function SectionProcess() {
  return (
    <Section
      title={content.title}
      titleBg={content.titleBg}
    >
      <div className="grid grid-cols-2 px-16 gap-16">
        {content.processList.map((p, idx) => (
          <div
            key={p.id}
            className={`flex flex-col px-8 py-16 gap-[43px] w-full max-w-[500px] rounded-3xl border-[3px] border-black ${
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
                <h3 className="font-semibold text-[2rem]">
                  0{idx + 1} {p.title}
                </h3>
                <span
                  className={`absolute bottom-0 right-0 rotate-[10deg] font-bold text-[4rem] text-accent-six ${caveatFont.className}`}
                >
                  {p.titleBg}
                </span>
              </div>
              <div className="h-[3px] w-full bg-black"></div>
              <p className="text-xl">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
