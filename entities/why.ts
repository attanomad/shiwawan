import { SupportedLocale } from "./common";

export interface Reason {
  id: string;
  locale: SupportedLocale;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
}

export const reasonList: Reason[] = [
  {
    locale: SupportedLocale.Th,
    id: "1",
    title: "ทุกพิกเซลถูกออกแบบอย่างพิถีพิถัน",
    tagline: "คิดมาแล้วอย่างดี",
    description:
      "เราดูแลการออกแบบอย่างละเอียดทุกพิกเซล เพื่อให้มั่นใจว่าเว็บไซต์ของคุณไม่เพียงแต่ดูสวยงาม แต่ยังมีประสิทธิภาพในการใช้งานสูงสุด",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.Th,
    id: "2",
    title: "โหลดเร็วทันใจไม่ต้องรอนาน",
    tagline: "ไม่ต้องกลัวลูกค้าหนีเพราะโหลดนาน",
    description:
      "เว็บไซต์ของเราถูกปรับแต่งให้โหลดได้เร็ว เพื่อให้ผู้ใช้ได้รับประสบการณ์ที่ดีและไม่สูญเสียลูกค้าเพราะความช้า",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.Th,
    id: "3",
    title: "รองรับ SEO ตั้งแต่ก้าวแรก",
    tagline: "เพิ่มโอกาสติดหน้าแรกบน Google",
    description:
      "เว็บไซต์ของคุณจะถูกสร้างขึ้นด้วยพื้นฐาน SEO ที่แข็งแกร่ง ทำให้มีโอกาสติดอันดับสูงบนหน้าผลการค้นหาและดึงดูดลูกค้าได้มากขึ้น",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.Th,
    id: "4",
    title: "ดูแลให้ ไม่ต้องทำเอง",
    tagline: "ให้คุณโฟกัสกับธุรกิจได้มากขึ้น",
    description:
      "เรามีบริการหลังการขายที่ช่วยดูแลเว็บไซต์ของคุณอย่างต่อเนื่อง เพื่อให้คุณมีเวลาโฟกัสกับธุรกิจของคุณได้เต็มที่",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.En,
    id: "5",
    title: "Every pixel is carefully crafted",
    tagline: "Thoughtfully designed",
    description:
      "We meticulously design every pixel to ensure your website not only looks great but also functions at the highest level of performance.",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.En,
    id: "6",
    title: "Lightning-fast loading speed",
    tagline: "No need to worry about losing customers",
    description:
      "Our websites are optimized for fast loading speeds to ensure users get a smooth experience, keeping customers from leaving due to slow load times.",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.En,
    id: "7",
    title: "SEO-ready from day one",
    tagline: "Boost your chances of ranking on Google's front page",
    description:
      "Your website will be built with strong SEO foundations, increasing the chances of ranking high on search results and attracting more customers.",
    imageUrl: "", // Add image URL if needed
  },
  {
    locale: SupportedLocale.En,
    id: "8",
    title: "We manage it, so you don't have to",
    tagline: "Let you focus more on your business",
    description:
      "We offer post-launch support to manage your website, allowing you to focus on your business without worrying about technical details.",
    imageUrl: "", // Add image URL if needed
  },
];
