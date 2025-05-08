"use client"

import { useRouter } from "next/navigation";
import { siteTitle, primaryFont, secondaryFont } from "@/config";
import PageName from "./pageName";

export default function Header() {
  const router = useRouter();
  return (
    <div className="topNames">
      <div className={`leftName ${secondaryFont.className}`}>
        <strong onClick={() => router.replace("/")}>{siteTitle}</strong>
      </div>
      <div className={`rightName ${primaryFont.className}`} onClick={router.refresh}>
        <PageName />
      </div>
    </div>
  )
}
