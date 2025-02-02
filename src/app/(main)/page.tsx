import Link from "next/link";
import { ownerResume, primaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import mergeClasses from "@/utils/css";
import styles from "./page.module.css";

const mainLinks = [
  {
    name: "start new game",
    loc: "#"
  },
  {
    name: "experience",
    loc: "/experience"
  },
  {
    name: "stats",
    loc: "/stats"
  },
  {
    name: "brief",
    loc: "/brief"
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
      <ul className={mergeClasses(styles.menuList, primaryFont.className)}>
        <li>
          <Link href={ownerResume ?? "#"} target="_blank" className="greenHover textScar">
            resume
          </Link>
        </li>
        {mainLinks.map((link, idx) => (
          <li key={idx}>
            <Link href={link.loc} prefetch={true} className="greenHover textScar">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}
