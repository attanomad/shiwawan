import { SupportedLocale } from "./common";

export interface Process {
  id: string;
  locale: SupportedLocale;
  title: string;
  titleBg: string;
  description: string;
  imageUrl: string;
}

export const processList: Process[] = [
  {
    id: "1",
    locale: SupportedLocale.Th,
    title: "รวมความต้องการ",
    titleBg: "Requirements",
    description:
      "ในขั้นตอนนี้ เราจะทำการรวบรวมข้อมูลทั้งหมดจากคุณเพื่อทำความเข้าใจความต้องการและเป้าหมายของโครงการอย่างชัดเจน เราจะพูดคุยถึงรายละเอียดทั้งหมด เช่น ฟีเจอร์ที่ต้องการ, กลุ่มเป้าหมาย, และรูปแบบที่คุณต้องการให้เว็บไซต์หรือแอปพลิเคชันของคุณเป็น",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "2",
    locale: SupportedLocale.Th,
    title: "ออกแบบ",
    titleBg: "Design",
    description:
      "หลังจากเราได้ข้อมูลที่ครบถ้วนแล้ว ทีมออกแบบของเราจะสร้างภาพลักษณ์ที่ดีที่สุดสำหรับเว็บไซต์หรือแอปพลิเคชัน โดยจะมีการสร้าง wireframe และ mockup เพื่อให้คุณเห็นภาพตัวอย่างและสามารถปรับแก้ไขได้ตามความต้องการ",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "3",
    locale: SupportedLocale.Th,
    title: "พัฒนา",
    titleBg: "Develop",
    description:
      "เมื่อการออกแบบได้รับการอนุมัติ เราจะเข้าสู่กระบวนการพัฒนา ทีมพัฒนาของเราจะเริ่มเขียนโค้ดและสร้างเว็บไซต์หรือแอปพลิเคชันที่มีประสิทธิภาพ พร้อมรองรับการใช้งานจริง โดยเราจะทดสอบความเสถียรและการทำงานของระบบตลอดเวลา",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "4",
    locale: SupportedLocale.Th,
    title: "ส่งมอบ",
    titleBg: "Launch",
    description:
      "ขั้นตอนสุดท้ายคือการเปิดใช้งานและส่งมอบโปรเจค ทีมของเราจะช่วยดูแลกระบวนการทั้งหมด ตั้งแต่การติดตั้งโฮสต์, การตั้งค่าโดเมน, ไปจนถึงการตรวจสอบทุกอย่างให้เรียบร้อยก่อนเปิดตัวอย่างเป็นทางการ",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "5",
    locale: SupportedLocale.En,
    title: "Requirements",
    titleBg: "Requirements",
    description:
      "In this stage, we gather all the necessary information from you to fully understand the project's requirements and goals. We will discuss every detail, such as desired features, target audience, and the design style you want for your website or application.",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "6",
    locale: SupportedLocale.En,
    title: "Design",
    titleBg: "Design",
    description:
      "Once we have all the information, our design team will create the best visual representation for your website or application. We will produce wireframes and mockups so you can see the initial concept and make adjustments as needed.",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "7",
    locale: SupportedLocale.En,
    title: "Develop",
    titleBg: "Develop",
    description:
      "After the design is approved, we move on to the development phase. Our development team will begin coding and building an efficient, fully functional website or application. We will continuously test the system for stability and performance throughout the process.",
    imageUrl: "", // Add image URL if needed
  },
  {
    id: "8",
    locale: SupportedLocale.En,
    title: "Launch",
    titleBg: "Launch",
    description:
      "The final step is launching and delivering the project. Our team will oversee the entire process, from hosting setup and domain configuration to ensuring everything is in place for a smooth official launch.",
    imageUrl: "", // Add image URL if needed
  },
];
