import Section from "../section/Section";

interface Reason {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
}

const content = {
  title: "ทำไมต้องเป็นชิวาวัน?",
  titleBg: "why",
  reasonList: [
    {
      id: "1",
      title: "ทุกพิกเซลถูกออกแบบอย่างพิถีพิถัน",
      tagline: "คิดมาแล้วอย่างดี",
      description:
        "Lorem ipsum dolor sit amet consectetur. Penatibus adipiscing facilisis a dolor habitant cras nec massa vel. Aliquam at eget lacus amet nulla molestie. Duis aliquam porta in magna sed nullam vehicula auctor. Aliquet cursus venenatis ac et.",
      imageUrl: "",
    },
    {
      id: "2",
      title: "โหลดเร็วทันใจไม่ต้องรอนาน",
      tagline: "ไม่ต้องกลัวลูกค้าหนีเพราะโหลดนาน",
      description:
        "Lorem ipsum dolor sit amet consectetur. Penatibus adipiscing facilisis a dolor habitant cras nec massa vel. Aliquam at eget lacus amet nulla molestie. Duis aliquam porta in magna sed nullam vehicula auctor. Aliquet cursus venenatis ac et.",
      imageUrl: "",
    },
    {
      id: "3",
      title: "รองรับ SEO ตั้งแต่ก้าวแรก",
      tagline: "เพิ่มโอกาสติดหน้าแรกบน Google",
      description:
        "Lorem ipsum dolor sit amet consectetur. Penatibus adipiscing facilisis a dolor habitant cras nec massa vel. Aliquam at eget lacus amet nulla molestie. Duis aliquam porta in magna sed nullam vehicula auctor. Aliquet cursus venenatis ac et.",
      imageUrl: "",
    },
    {
      id: "4",
      title: "ดูแลให้ ไม่ต้องทำเอง",
      tagline: "ให้คุณโฟกัสกับธุรกิจได้มากขึ้น",
      description:
        "Lorem ipsum dolor sit amet consectetur. Penatibus adipiscing facilisis a dolor habitant cras nec massa vel. Aliquam at eget lacus amet nulla molestie. Duis aliquam porta in magna sed nullam vehicula auctor. Aliquet cursus venenatis ac et.",
      imageUrl: "",
    },
  ] as Reason[],
};

export default function WhySection() {
  return (
    <Section
      title={content.title}
      titleBg={content.titleBg}
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
      className={`flex px-8 py-16 gap-8 max-w-screen-xl mx-auto${
        reverse ? " flex-row-reverse" : ""
      }`}
    >
      <div className="flex justify-center items-center w-full">
        <div
          className="bg-cover bg-center size-[450px]"
          style={{
            backgroundImage: `url(${
              imageUrl || `https://picsum.photos/600/600?attnmd=${id}`
            })`,
          }}
        ></div>
      </div>
      <div
        className={`flex flex-col gap-4 w-full text-text-primary${
          reverse ? " text-right" : ""
        }`}
      >
        <p className="font-semibold text-xl">{tagline}</p>
        <p className="font-medium text-[2rem]">{title}</p>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
