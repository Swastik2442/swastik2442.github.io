"use client";

import { useRouter } from "next/navigation";
import { primaryFont } from "@/config";

type BackButtonVariant = "normal" | "small";

export default function BackButton({ variant = "normal" }: { variant?: BackButtonVariant }) {
  const router = useRouter();
  return (
    <a
      type="button"
      onClick={router.back}
      className={`${primaryFont.className} ${variant == 'normal' ? 'backButton' : ''} greenHover textScar`}
    >
      back
    </a>
  )
}
