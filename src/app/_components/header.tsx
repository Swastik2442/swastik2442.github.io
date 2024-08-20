import { siteTitle, primaryFont, secondaryFont } from "@/config";
import PageName from "./pageName";

export default function Header() {
  return (
    <div className="topNames">
      <div className={`leftName ${secondaryFont.className}`}>
        <strong>{siteTitle}</strong>
      </div>
      <div className={`rightName ${primaryFont.className}`}>
        <PageName />
      </div>
    </div>
  )
}
