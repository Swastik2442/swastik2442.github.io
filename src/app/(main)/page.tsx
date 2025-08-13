import Link from "next/link";
import { primaryFont } from "@/config";
import { BorderStyle } from "@/components/vcBorders";
import mergeClasses from "@/utils/css";
import { toRadians } from "@/utils/others";
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
    <BorderStyle tl={0} tr={toRadians(180)} br={toRadians(-70)}/>
    <main className={styles.main}>
      <ul className={mergeClasses(styles.menuList, primaryFont.className)}>
        <li>
          <Link href="/links/resume" target="_blank" prefetch={false} className="greenHover textScar">
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
