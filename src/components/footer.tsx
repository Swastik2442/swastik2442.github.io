import { ownerName, startYear } from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearText = startYear != currentYear ? `${startYear} - ${currentYear}` : startYear;
  return (
    <p className="footer">&copy; {ownerName} {yearText}</p>
  )
}
