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
          <ArrowLeft className="size-6" />
        </button>
      )}
    </>
  );
}
