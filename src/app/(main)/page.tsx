import Link from "next/link";
import { ownerResume, primaryFont } from "@/app/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

const mainLinks = [
  {
    name: "resume",
    loc: ownerResume ?? "#"
  },
  {
    name: "start new game",
    loc: "#"
  },
  {
    name: "options",
    loc: "#"
  },
  {
    name: "stats",
    loc: "/stats"
  },
  {
    name: "breif",
    loc: "/breif"
  },
  {
    name: "contact",
    loc: "/contact"
  },
  {
    name: "quit site",
    loc: "/quit"
  }
];

export default function Home() {
  return (
    <>
    <BorderStyle up={1} down={-1} left={2.5} right={-1.5}/>
    <main className={styles.main}>
      <ul className={`${styles.menuList} ${primaryFont.className}`}>
        {mainLinks.map((link, idx) => (
          <li key={idx}>
            <Link href={link.loc} className="greenHover textScar">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}
