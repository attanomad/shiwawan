"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="text-white text-base bg-black/20 rounded-lg px-2 py-1"
      onClick={() => router.back()}
    >
      กลับ
    </button>
  );
}
