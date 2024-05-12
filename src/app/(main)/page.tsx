import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={`${styles.menuList}`}>
        <li>
          <Link href="https://github.com/" className="greenHover textScar">
            resume
          </Link>
        </li>
        <li>
          <Link href="" className="greenHover textScar">
            start new game
          </Link>
        </li>
        <li>
          <Link href="/contact" className="greenHover textScar">
            contact
          </Link>
        </li>
        <li>
          <Link href="" className="greenHover textScar">
            stats
          </Link>
        </li>
        <li>
          <Link href="" className="greenHover textScar">
            breif
          </Link>
        </li>
        <li>
          <Link href="" className="greenHover textScar">
            options
          </Link>
        </li>
        <li>
          <Link href="/quit" className="greenHover textScar">
            quit site
          </Link>
        </li>
      </ul>
    </main>
  );
}
