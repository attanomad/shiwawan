import {
  Testimonial,
  testimonialList,
  TestimonialLocale,
} from "@/entities/testimonials";
import Image from "next/image";
import Section from "../section/Section";

const content = {
  title: "นี่คือคำบอกเล่าจากลูกค้าที่น่ารักของชิวาวัน",
  titleBg: "testimonials",
  testimonialList,
};

export default function TestimonialsSection() {
  const testimonialChunkList = chunkArray(
    fetchTestimonialList(TestimonialLocale.Th),
    3
  );

  return (
    <Section
      title={content.title}
      titleBg={content.titleBg}
      id="testimonials"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16 gap-4 md:gap-8 bg-[radial-gradient(closest-side,var(--color-accent-four)_0%,white_100%)]">
        {testimonialChunkList.map((chunk, idx) => (
          <div
            key="idx"
            className={`flex flex-col gap-4 md:gap-8${
              idx === testimonialChunkList.length - 1 ? " hidden lg:block" : ""
            }`}
          >
            {chunk.map((t) => (
              <TestimonialCard
                key={t.id}
                {...t}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard(t: Testimonial) {
  return (
    <div className="flex flex-col p-4 gap-4 md:p-8 md:gap-8 bg-white rounded-2xl">
      <p className="text-base">{t.testimonial}</p>
      <div className="flex gap-4 items-center">
        <Image
          src={
            t.author.profileImageUrl ||
            `https://picsum.photos/128/128?attnmd=${t.id}`
          }
          alt={t.author.name}
          width={64}
          height={64}
          className="rounded-full size-16"
        />
        <div>
          <p className="font-bold text-lg">{t.author.name}</p>
          <p>{t.author.role}</p>
        </div>
      </div>
    </div>
  );
}

function chunkArray<T = unknown>(
  array: Array<T>,
  size: number
): Array<Array<T>> {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}

function fetchTestimonialList(locale?: TestimonialLocale) {
  if (!locale) return testimonialList;

  return testimonialList.filter((t) => t.locale === locale);
}
