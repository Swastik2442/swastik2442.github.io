"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import { primaryFont } from "@/config";
import mergeClasses from "@/utils/css";

function BackButton({
  variant = "normal",
  showBG = true
}: {
  variant?: "normal" | "small",
  showBG?: boolean
}) {
  const router = useRouter();
  return (
    <a
      type="button"
      onClick={router.back}
      className={mergeClasses(
        "greenHover textScar",
        primaryFont.className,
        variant == 'normal' ? 'backButton' : '',
        showBG ? 'absHover' : '',
      )}
    >
      back
    </a>
  )
}

export default memo(BackButton);
