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
    <section className="py-32 px-8 xl:pt-[221px] xl:pb-[269px] flex flex-col gap-12 xl:gap-[70px] bg-gradient-to-b from-primary via-[#D5FFDE] to-white">
      <div className="flex flex-col items-center w-full gap-8 md:gap-12 xl:gap-[50px]">
        <h1 className="w-full max-w-[700px] xl:max-w-[945px] text-4xl md:text-5xl xl:text-hero text-center font-bold text-text-primary">
          {content.title}
        </h1>
        <p className="w-full max-w-[600px] xl:max-w-[892px] text-text-primary text-xl md:text-2xl text-center">
          {content.tagline}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-xl xl:text-[1.75rem] gap-2 md:gap-4 xl:gap-[37px]">
        <button className="text-white px-6 py-4 bg-gradient-to-r from-accent-one via-accent-two to-accent-one rounded-[4rem]">
          {content.cta}
        </button>
        <p className="underline">
          <Link href="#works">{content.subCta}</Link>
        </p>
      </div>
      <DotOneSvg className="absolute w-[4.5rem] sm:w-24 md:w-32 lg:w-40 xl:w-[197px] left-3 sm:left-10 md:left-16 lg:left-24 xl:left-[85px] top-[270px] md:top-[200px] xl:top-[461px] text-text-primary" />
      <DotTwoSvg className="absolute w-[4.5rem] sm:w-24 md:w-32 lg:w-40 xl:w-[215px] right-2 sm:right-8 md:right-12 lg:right-20 xl:right-[32.85px] top-14 sm:top-20 md:top-24 xl:top-[131px] text-text-primary" />
      <div className="absolute w-full text-center left-0 top-0 pt-[117px] md-[pt-80px] xl:pt-[155px] text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11.25rem] font-bold text-[hsl(133,_100,_20)] opacity-[.05] tracking-[0.15em] overflow-hidden">
        <div className="flex justify-center transform rotate-[3.91deg]">
          {content.bgText.split("").map((char, idx) => (
            <span
              key={idx}
              className={styles[`char-${idx}`] || "" + " inline-block"}
            >
              {char.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
