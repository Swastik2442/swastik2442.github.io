"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import { primaryFont } from "@/config";

type BackButtonVariant = "normal" | "small";

function BackButton({ variant = "normal" }: { variant?: BackButtonVariant }) {
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

export default memo(BackButton);
