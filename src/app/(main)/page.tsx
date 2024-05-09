import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={`${styles.menuList}`}>
        <li>
          <Link href="https://github.com/">
            resume
          </Link>
        </li>
        <li>
          <Link href="">
            start new game
          </Link>
        </li>
        <li>
          <Link href="/contact">
            contact
          </Link>
        </li>
        <li>
          <Link href="">
            stats
          </Link>
        </li>
        <li>
          <Link href="">
            breif
          </Link>
        </li>
        <li>
          <Link href="">
            options
          </Link>
        </li>
        <li>
          <Link href="/quit">
            quit site
          </Link>
        </li>
      </ul>
    </main>
  );
}
