"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="text-white text-base md:text-[1.375rem] lg:text-2xl xl:text-[2rem] bg-black/20 rounded-lg px-2 md:px-4 py-1 md:py-2 !leading-normal"
      onClick={() => router.back()}
    >
      กลับ
    </button>
  );
}
