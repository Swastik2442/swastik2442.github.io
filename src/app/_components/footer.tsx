import { ownerName, startYear } from "@/app/config";

export default function footer() {
  const currentYear = new Date().getFullYear();
  const yearText = startYear != currentYear ? `${startYear} - ${currentYear}` : startYear;
  return (
    <p className="footer">&copy; {ownerName} {yearText}</p>
  )
}
