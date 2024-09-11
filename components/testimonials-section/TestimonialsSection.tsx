import Image from "next/image";

interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    profileImageUrl: string;
  };
  testimonial: string;
}

const content = {
  title: "นี่คือคำบอกเล่าจากลูกค้าที่น่ารักของชิวาวัน",
  titleBg: "testimonials",
  testimonialList: [
    {
      id: "1",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Sed tincidunt diam sit id faucibus ipsum ut augue. Aliquet adipiscing at facilisi aliquam proin morbi. Venenatis diam pellentesque ut fermentum eu neque quisque. Quis tellus in id proin malesuada morbi felis.",
    },
    {
      id: "2",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Elit egestas vel quam ut massa eros congue. Pellentesque aliquam commodo sed diam. Cursus arcu aenean lorem nisl sapien. Egestas morbi diam massa senectus sed eget tortor libero ultricies. Maecenas est faucibus vestibulum aliquam. Orci nunc rhoncus justo massa molestie in ullamcorper. In gravida volutpat vehicula ac leo laoreet scelerisque mauris.",
    },
    {
      id: "3",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Amet eu malesuada lorem quam tristique laoreet quis malesuada. Pharetra facilisis nibh pretium gravida duis pellentesque lectus non faucibus.",
    },
    {
      id: "4",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Sit donec aenean ullamcorper ac in id dui sed. Eu ut aliquam facilisi sapien lectus. Sed vulputate consequat justo vitae duis urna donec quis mattis. Cursus nibh accumsan iaculis nulla. Egestas ut pellentesque adipiscing malesuada cras tincidunt sed feugiat. Dolor in dui magna turpis feugiat. Adipiscing dictum urna lacus fermentum. Eu tristique sodales tristique risus fermentum metus aenean. Eros scelerisque enim interdum ut urna dictum ipsum rhoncus amet. Sed molestie phasellus cras iaculis dignissim integer diam pharetra. Aenean aliquam imperdiet fringilla viverra rhoncus tortor.",
    },
    {
      id: "5",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Sed tincidunt diam sit id faucibus ipsum ut augue. Aliquet adipiscing at facilisi aliquam proin morbi. Venenatis diam pellentesque ut fermentum eu neque quisque. Quis tellus in id proin malesuada morbi felis.",
    },
    {
      id: "6",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Quis ac facilisis potenti eu orci. Ipsum pulvinar quisque augue in dignissim nullam scelerisque. At eu volutpat faucibus adipiscing nisl lacus diam egestas. Suscipit suspendisse morbi quam semper ridiculus. Sit tortor volutpat velit elit blandit posuere velit. Nullam laoreet bibendum ridiculus lacus amet dictumst.",
    },
    {
      id: "7",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Tellus in nec ut eget nec. Eleifend volutpat eu eleifend malesuada non lorem rutrum. Augue feugiat tristique eu ultricies pulvinar viverra massa molestie. Porta donec enim mattis a mi sit quisque sit. Adipiscing urna et eleifend nulla. Non porta commodo faucibus convallis augue sit morbi. Nullam vel penatibus mattis adipiscing integer habitant. Quis pulvinar sed egestas arcu in. Etiam aliquet vel consequat habitasse dictum maecenas sed.",
    },
    {
      id: "8",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Id eu in mattis magna. Facilisis malesuada adipiscing interdum amet vitae tempus eget bibendum. Sapien rhoncus gravida feugiat egestas venenatis.",
    },
    {
      id: "9",
      author: {
        name: "John Doe",
        role: "Sales Executive",
        profileImageUrl: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet consectetur. Proin semper lobortis id elementum non neque sed porta ullamcorper. Et proin sed pellentesque eu faucibus elementum a. Ac vivamus at senectus ut sit nullam id. Nisi arcu iaculis convallis varius sagittis lectus. Amet curabitur nisi urna non diam pulvinar eu quis. Donec egestas egestas egestas porttitor placerat. Molestie tristique sit ultrices arcu ut. Libero augue ut vel dolor amet adipiscing sed donec. Molestie malesuada pulvinar pulvinar amet. Venenatis lorem ac arcu morbi risus arcu tristique tortor. Morbi risus morbi purus id eu aliquam in massa.",
    },
  ] as Testimonial[],
};

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

export default function TestimonialsSection() {
  const testimonialChunkList = chunkArray(content.testimonialList, 3);

  return (
    <section className="relative flex flex-col gap-y-32 py-24">
      <h2 className="mx-auto text-center text-5xl max-w-[486px] font-bold text-text-primary leading-normal">
        {content.title}
      </h2>
      <div className="absolute flex justify-center overflow-hidden -z-10 tracking-[.35em] top-0 left-0 w-full text-accent-three text-sectionTitleBg font-black opacity-40 uppercase font-en">
        <span>{content.titleBg}</span>
      </div>
      <div className="grid grid-rows-1 grid-cols-3 px-16 gap-x-8 bg-[radial-gradient(closest-side,var(--color-accent-four)_0%,white_100%)]">
        {testimonialChunkList.map((chunk) => (
          <div className="flex flex-col gap-8">
            {chunk.map((t) => (
              <TestimonialCard
                key={t.id}
                {...t}
              />
            ))}
          </div>
        ))}
      </div>
      {/* <div className="flex gap-8 px-16">
        {content.testimonialList.map((t) => (
          <div
            key={t.id}
            className="flex basis-1/4 shrink-0 flex-col p-8 gap-8 bg-white rounded-2xl"
          >
            <p>{t.testimonial}</p>
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
                <p className="font-bold">{t.author.name}</p>
                <p>{t.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

function TestimonialCard(t: Testimonial) {
  return (
    <div className="flex flex-col p-8 gap-8 bg-white rounded-2xl">
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
