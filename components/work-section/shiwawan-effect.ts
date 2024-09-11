import { effectInit } from "swiper/effect-utils";
import { SwiperModule } from "swiper/types";

const EffectShiwawan: SwiperModule = ({ extendParams, swiper, on, params }) => {
  extendParams({
    shiwawan: {},
  });

  const setTranslate = () => {
    console.log("setTranslate()");

    const { el, slides, activeIndex, virtual } = swiper;

    for (let i = 0; i < slides.length; i++) {
      const slideEl = slides[i];
      const slideIndex = virtual && params.virtual ? virtual.from + i : i;

      if (slideIndex === activeIndex) {
        const { width } = slideEl.getBoundingClientRect();
        console.log("width: ", width);
      }
    }
  };

  effectInit({
    effect: "shiwawan",
    swiper,
    // @ts-ignore
    on,
    setTranslate,
    setTransition(duration) {
      console.log("setTransition()", duration);
    },
  });
};

export default EffectShiwawan;
