"use client";

import { Work, workList } from "@/entities/works";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import { EffectCoverflow, FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Section from "../section/Section";
import EffectShiwawan from "./shiwawan-effect";
import "./styles.css";

const content = {
  title: "ตัวอย่างผลงานของเรา",
  titleBg: "works",
  workList,
};

export default function WorkSection() {
  return (
    <Section
      title={content.title}
      titleBg={content.titleBg}
      id="works"
    >
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={1.125 * 16}
          modules={[FreeMode, Mousewheel, EffectCoverflow, EffectShiwawan]}
          // freeMode={{ enabled: true, sticky: true }}
          mousewheel={{
            enabled: true,
            // forceToAxis: true,
            thresholdDelta: 20,
            releaseOnEdges: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 20,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          // effect={"coverflow"}
          effect={"shiwawan"}
          centeredSlides
          // onSlideChangeTransitionEnd={(swiper) => {
          //   const activeSlide = swiper.slides[swiper.activeIndex];
          //   const containerRect = swiper.el.getBoundingClientRect();
          //   const wrapperRect = swiper.wrapperEl.getBoundingClientRect();
          //   const activeSlideRect = activeSlide.getBoundingClientRect();
          //   const centerOffset = swiper.width / 2 + containerRect.left;
          //   const wrapperOffset = wrapperRect.left - containerRect.left;
          //   const activeSlideOffset = activeSlideRect.left - wrapperRect.left;
          //   const offset =
          //     swiper.width / 2 - activeSlideOffset - activeSlideRect.width / 2;
          //   // const center = -swiper.translate - swiper.width / 2;
          //   // const offset =
          //   //   center -
          //   //   (activeSlide.getBoundingClientRect().left - center) -
          //   //   activeSlide.offsetWidth / 2;
          //   swiper.setTranslate(offset);
          // }}
        >
          {content.workList.map((w) => (
            <SwiperSlide
              key={w.id}
              className="!w-auto"
            >
              <WorkSlide {...w} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}

const WorkSlide = ({ id, slug, title, tagline, imageUrl, cta }: Work) => {
  // const swiper = useSwiper();
  const { isActive } = useSwiperSlide();

  // useEffect(() => {
  //   if (
  //     isActive &&
  //     typeof swiper.setTranslate === "function" &&
  //     typeof swiper.translate === "number"
  //   ) {
  //     console.log("ok", swiper);
  //     // setTranslate(translate - (614 - 307) / 2);
  //   }
  // }, [isActive, swiper.setTranslate, swiper.translate]);

  return (
    <div
      className={`${
        isActive
          ? "w-[339px] md:w-[614px]"
          : "w-[226px] md:w-[307px] relative grayscale-[0.5] opacity-80 blur-[1.5px] "
      }transition-[width] overflow-hidden delay-100 duration-500 flex flex-col justify-end gap-[0.625rem] h-[500px] relative rounded-[1.75rem] bg-cover bg-center`}
      style={{
        // * Considering using <Image /> instead for lazy loading
        // * and SEO
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,.6)), url(${
          imageUrl || `https://picsum.photos/1200/1000?attnmd=${id}`
        })`,
      }}
    >
      <div
        className={`${
          isActive ? "opacity-0 " : ""
        }pointer-events-none transition-[opacity] delay-200 absolute w-full h-full top-0 left-0 z-10 bg-[rgba(0,0,0,.3)]`}
      ></div>
      <div className="flex flex-col justify-center items-center gap-8 p-8 text-white">
        <div className="w-full">
          <p
            className={`transition-[font-weight] duration-500 ${
              isActive ? "font-bold" : "font-medium"
            } text-left text-[1.75rem]`}
          >
            {title}
          </p>
          {isActive ? <p className="mt-2 text-base">{tagline}</p> : null}
        </div>
        {isActive && (
          <Link
            href={`/works/${slug}`}
            className={`transition-[all] delay-500 duration-500 w-full text-left px-4 py-2 text-base border border-white rounded-[1.75rem]${
              isActive ? " bg-white text-text-primary" : ""
            }`}
          >
            {cta}
          </Link>
        )}
      </div>
    </div>
  );
};
