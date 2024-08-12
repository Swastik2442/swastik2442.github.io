import Link from "next/link";
import BorderStyle from "./borderStyle";
import styles from "./page.module.css";

const mainLinks = [
  {
    name: "resume",
    loc: "https://github.com/"
  },
  {
    name: "start new game",
    loc: "#"
  },
  {
    name: "contact",
    loc: "/contact"
  },
  {
    name: "stats",
    loc: "#"
  },
  {
    name: "breif",
    loc: "#"
  },
  {
    name: "options",
    loc: "#"
  },
  {
    name: "quit site",
    loc: "/quit"
  }
];

export default function Home() {
  return (
    <>
    <BorderStyle/>
    <main className={styles.main}>
      <ul className={`${styles.menuList}`}>
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
