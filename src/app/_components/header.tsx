"use client"
 
import { useSelectedLayoutSegments } from "next/navigation";
import { siteTitle, primaryFont, secondaryFont } from "@/app/config";

export default function header() {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="topNames">
        <div className={`leftName ${secondaryFont.className}`}>
            <strong>{siteTitle}</strong>
        </div>
        <div className={`rightName ${primaryFont.className}`}>
            {segments.length > 0 ? segments.at(0) : "pause menu"}
        </div>
    </div>
  )
}
