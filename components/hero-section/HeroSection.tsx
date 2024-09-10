import Link from "next/link";
import DotOneSvg from "./DotOne";
import DotTwoSvg from "./DotTwo";
import styles from "./HeroSection.module.css";

const content = {
  title: "เข้าถึงลูกค้ามากขึ้นด้วยเว็บไซต์ที่คิดมาเพื่อธุรกิจคุณโดยเฉพาะ",
  tagline:
    "เสริมภาพลักษณ์และสร้างความน่าเชื่อถือให้ธุรกิจด้วยการมีเว็บไซต์ที่สะท้อนตัวตนของแบรนด์และสื่อสารกับกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพโดยนักออกแบบและนักพัฒนาเว็บไซต์มืออาชีพ",
  cta: "พูดคุยกับเรา",
  subCta: "ดูผลงาน",
  bgText: "shiwawan",
};

export default function HeroSection() {
  return (
    <section className="pt-[221px] pb-[269px] bg-gradient-to-b from-primary via-[#D5FFDE] to-white">
      <h1 className="w-[945px] mx-auto text-hero text-center font-bold text-text-primary">
        {content.title}
      </h1>
      <p className="mt-[50px] w-[892px] mx-auto text-text-primary text-2xl text-center">
        {content.tagline}
      </p>
      <div className="flex flex-col justify-center items-center text-[1.75rem] gap-[37px]">
        <button className="mt-[70px] text-white px-6 py-4 bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]">
          {content.cta}
        </button>
        <p className="underline">
          <Link href="#">{content.subCta}</Link>
        </p>
      </div>
      <DotOneSvg className="absolute left-[85px] top-[461px] text-text-primary" />
      <DotTwoSvg className="absolute right-[32.85px] top-[131px] text-text-primary" />
      <div className="absolute left-[114px] top-[155px] text-[11.25rem] font-bold text-[hsl(133,_100,_20)] opacity-[.05] tracking-[0.15em] transform rotate-[3.91deg]">
        {content.bgText.split("").map((char, idx) => (
          <span
            key={idx}
            className={styles[`char-${idx}`] + " inline-block"}
          >
            {char.toUpperCase()}
          </span>
        ))}
      </div>
    </section>
  );
}
