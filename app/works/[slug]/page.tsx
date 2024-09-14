import { workList } from "@/entities/works";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "./BackButton";

export async function generateStaticParams() {
  return workList.map(({ id }) => ({ slug: id }));
}

export default function WorkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const work = workList.find((w) => w.slug === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <header
      className="h-[510px] md:h-[622px] lg:h-[705px] w-full flex flex-col justify-between items-start p-4 md:px-16 md:py-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,.5)), url(${
          work.imageUrl || `https://picsum.photos/1200/1000?attnmd=${work.id}`
        })`,
      }}
    >
      <BackButton />
      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-[2rem] md:text-5xl lg:text-[4rem] lg:text-7xl font-bold drop-shadow-[0_0_20px_rgba(0,0,0,.5)]">
          {work.title}
        </h1>
        <div className="flex gap-2">
          {work.tags.map((t, i) => (
            <Link
              href="#"
              key={i}
              className="bg-black text-white px-3 py-2 font-semibold text-[0.625rem] md:text-base rounded-3xl !leading-[80%]"
            >
              {t}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 text-white text-sm md:text-xl">
          <p>Status: {work.status}</p>
          {work.kickedOffOn && (
            <p>Kicked off on: {formatDate(work.kickedOffOn)}</p>
          )}
          {work.deliveredOn && (
            <p>Launched on: {formatDate(work.deliveredOn)}</p>
          )}
        </div>
      </div>
    </header>
  );
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options); // Example: "September 13, 2024"
}
