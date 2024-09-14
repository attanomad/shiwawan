"use client";

import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <button onClick={() => router.back()}>
          <ArrowLeft className="size-6 md:size-8 drop-shadow-[0_0_5px_rgba(0,0,0,.5)]" />
        </button>
      )}
    </>
  );
}
