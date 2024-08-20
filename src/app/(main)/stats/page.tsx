import Link from "next/link";
import { primaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

export default function Stats() {
  return (
    <>
    <BorderStyle />
    <main className={styles.main}>
      <div style={{ paddingBottom: 3 + "vh" }}>
        Hello
      </div>
      <Link href="/" className={`${primaryFont.className} backButton greenHover textScar`}>back</Link>
    </main>
    </>
  );
}
