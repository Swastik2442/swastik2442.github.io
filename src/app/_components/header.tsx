import { siteTitle, primaryFont, secondaryFont } from "@/app/config";
import PageName from "./pageName";

export default function header() {
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
