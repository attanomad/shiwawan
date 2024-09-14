export enum TestimonialLocale {
  En = "en",
  Th = "th",
}

export interface Testimonial {
  id: string;
  locale: TestimonialLocale;
  author: {
    name: string;
    role: string;
    profileImageUrl: string;
  };
  testimonial: string;
}

export const testimonialList: Testimonial[] = [
  {
    id: "1",
    locale: TestimonialLocale.En,
    author: {
      name: "Sarah Mitchell",
      role: "Marketing Director, Bright Ideas Co.",
      profileImageUrl: "/images/testimonials/profile-1.jpg",
    },
    testimonial:
      "Working with this team has been an absolute game-changer for our online presence. They took our vague ideas and turned them into a stunning website that perfectly reflects our brand. Highly recommend!",
  },
  {
    id: "2",
    locale: TestimonialLocale.En,
    author: {
      name: "Tom Richards",
      role: "CEO, EcoSolutions",
      profileImageUrl: "/images/testimonials/profile-2.jpg",
    },
    testimonial:
      "Their attention to detail and ability to translate our business goals into a functional and beautiful website was incredible. The development process was seamless, and the outcome exceeded all expectations.",
  },
  {
    id: "3",
    locale: TestimonialLocale.En,
    author: {
      name: "Emily Dawson",
      role: "Founder, The Artisanal Bakery",
      profileImageUrl: "/images/testimonials/profile-3.jpg",
    },
    testimonial:
      "From the initial concept to the final design, they truly understood our vision. Our new site is not only beautiful but also user-friendly. Our customers love it!",
  },
  {
    id: "4",
    locale: TestimonialLocale.En,
    author: {
      name: "David Hernandez",
      role: "Operations Manager, FastTech Solutions",
      profileImageUrl: "/images/testimonials/profile-4.jpg",
    },
    testimonial:
      "We needed a custom solution for our complex needs, and this team delivered beyond what we thought was possible. They made sure every functionality worked perfectly. Fantastic service!",
  },
  {
    id: "5",
    locale: TestimonialLocale.En,
    author: {
      name: "Jessica Lin",
      role: "Head of Digital Marketing, Zen Retreats",
      profileImageUrl: "/images/testimonials/profile-5.jpg",
    },
    testimonial:
      "Their creativity and professionalism set them apart from other studios we've worked with. They brought fresh ideas to the table and built a site that captures our audience effortlessly.",
  },
  {
    id: "6",
    locale: TestimonialLocale.En,
    author: {
      name: "Mike O'Leary",
      role: "Product Manager, Stellar Apps",
      profileImageUrl: "/images/testimonials/profile-6.jpg",
    },
    testimonial:
      "Our app’s landing page now looks modern, sleek, and professional thanks to this studio. Their design skills are second to none, and their approach to problem-solving is impressive.",
  },
  {
    id: "7",
    locale: TestimonialLocale.En,
    author: {
      name: "Lily Nguyen",
      role: "Owner, Nguyen Family Restaurant",
      profileImageUrl: "/images/testimonials/profile-7.jpg",
    },
    testimonial:
      "I’ve never seen my restaurant’s website look this good! They really took the time to understand what I wanted and created a website that not only looks great but also brings in more customers.",
  },
  {
    id: "8",
    locale: TestimonialLocale.En,
    author: {
      name: "James Pritchard",
      role: "CTO, InnovateTech",
      profileImageUrl: "/images/testimonials/profile-8.jpg",
    },
    testimonial:
      "The web development team was phenomenal. Their technical expertise and quick turnaround helped us launch our product site on time. Couldn’t ask for a better partner in development.",
  },
  {
    id: "9",
    locale: TestimonialLocale.En,
    author: {
      name: "Rachel Adams",
      role: "Content Creator, Rachel’s Corner",
      profileImageUrl: "/images/testimonials/profile-9.jpg",
    },
    testimonial:
      "They made the whole design process so easy and enjoyable. My blog’s redesign is everything I imagined and more! I’m already seeing more engagement from my readers.",
  },

  // Thai
  {
    id: "10",
    locale: TestimonialLocale.Th,
    author: {
      name: "สมชาย วิจิตร",
      role: "ผู้จัดการฝ่ายการตลาด, บ.ไทยพัฒนา",
      profileImageUrl: "/images/testimonials/profile-10.jpg",
    },
    testimonial:
      "ทีมนี้ทำงานได้อย่างยอดเยี่ยม พวกเขาสร้างเว็บไซต์ที่ดูดีและใช้งานง่ายให้เรา เราได้รับคำชมจากลูกค้าจำนวนมากตั้งแต่เปิดใช้เว็บใหม่ ขอบคุณมาก!",
  },
  {
    id: "11",
    locale: TestimonialLocale.Th,
    author: {
      name: "นฤมล จิตรเจริญ",
      role: "CEO, ผลิตภัณฑ์ไทยธรรม",
      profileImageUrl: "/images/testimonials/profile-11.jpg",
    },
    testimonial:
      "เว็บไซต์ของเราถูกออกแบบมาอย่างสวยงาม และทีมงานให้ความใส่ใจในรายละเอียดทุกขั้นตอน การพัฒนาเว็บเป็นไปได้อย่างราบรื่น พอใจมากค่ะ!",
  },
  {
    id: "12",
    locale: TestimonialLocale.Th,
    author: {
      name: "วิชัย ประเสริฐ",
      role: "เจ้าของร้าน, ครัวไทย",
      profileImageUrl: "/images/testimonials/profile-12.jpg",
    },
    testimonial:
      "การทำงานกับทีมนี้เหมือนมีทีมพัฒนาเว็บไซต์มืออาชีพมาช่วยสร้างสรรค์เว็บไซต์ที่สะท้อนความเป็นร้านของเราได้อย่างลงตัว ลูกค้าของเราชอบเว็บใหม่มาก!",
  },
  {
    id: "13",
    locale: TestimonialLocale.Th,
    author: {
      name: "กาญจนา รุ่งเรือง",
      role: "หัวหน้าฝ่ายประชาสัมพันธ์, บ.จันทร์เจ้า",
      profileImageUrl: "/images/testimonials/profile-13.jpg",
    },
    testimonial:
      "เราชื่นชอบการสร้างสรรค์ของทีมนี้มาก พวกเขาช่วยพัฒนาเว็บไซต์ที่ใช้งานง่ายและสามารถเข้าถึงกลุ่มลูกค้าเป้าหมายได้ดีเยี่ยม!",
  },
  {
    id: "14",
    locale: TestimonialLocale.Th,
    author: {
      name: "ปรีชา ชาญชัย",
      role: "ผู้จัดการฝ่าย IT, นิวโปรเจค",
      profileImageUrl: "/images/testimonials/profile-14.jpg",
    },
    testimonial:
      "ทีมงานมีความรู้ความสามารถทางเทคนิคอย่างยอดเยี่ยม เราสามารถเปิดใช้งานเว็บไซต์ตรงตามเวลาและได้ผลงานที่เหนือความคาดหมาย ขอบคุณมาก!",
  },
  {
    id: "15",
    locale: TestimonialLocale.Th,
    author: {
      name: "วาสนา ทองสุข",
      role: "เจ้าของธุรกิจ, ช็อปออนไลน์วาสนา",
      profileImageUrl: "/images/testimonials/profile-15.jpg",
    },
    testimonial:
      "ทีมนี้ช่วยสร้างเว็บไซต์ที่ดูสวยงามและทันสมัยให้กับเรา ฉันพอใจมากที่ลูกค้าของฉันสามารถใช้เว็บได้ง่ายและสะดวกในการสั่งซื้อสินค้า!",
  },
  {
    id: "16",
    locale: TestimonialLocale.Th,
    author: {
      name: "อุดม สุขสำราญ",
      role: "CTO, TechMove",
      profileImageUrl: "/images/testimonials/profile-16.jpg",
    },
    testimonial:
      "การพัฒนาเว็บกับทีมนี้ทำได้ง่ายและรวดเร็ว ทีมงานมีความเข้าใจลึกซึ้งในด้านเทคโนโลยี ช่วยให้เราสามารถเปิดตัวผลิตภัณฑ์ใหม่ได้ตามกำหนด",
  },
  {
    id: "17",
    locale: TestimonialLocale.Th,
    author: {
      name: "พรนภา พิพัฒน์",
      role: "เจ้าของร้านอาหาร, ครัวมะลิ",
      profileImageUrl: "/images/testimonials/profile-17.jpg",
    },
    testimonial:
      "เว็บไซต์ร้านอาหารของเราไม่เคยดูดีเท่านี้มาก่อน ทีมงานเข้าใจความต้องการของเราและสร้างเว็บที่สวยงามและดึงดูดลูกค้าใหม่ๆ ได้ดีมาก!",
  },
  {
    id: "18",
    locale: TestimonialLocale.Th,
    author: {
      name: "จตุพล วรรณศิลป์",
      role: "นักออกแบบกราฟิก, Freelance",
      profileImageUrl: "/images/testimonials/profile-18.jpg",
    },
    testimonial:
      "การทำงานกับทีมนี้เป็นประสบการณ์ที่ดีมาก พวกเขาให้คำแนะนำที่เป็นประโยชน์และสร้างเว็บไซต์ที่โดดเด่นและเป็นเอกลักษณ์ให้กับงานของฉันได้อย่างดี",
  },
];
