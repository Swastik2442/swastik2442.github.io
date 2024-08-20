import Link from "next/link";
import { primaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

export default function Breif() {
  return (
    <>
    <BorderStyle up={0} down={0} left={0} right={0} />
    <main className={styles.main}>
      <div style={{ paddingBottom: 3 + "vh" }}>
        Hi
      </div>
      <Link href="/" className={`${primaryFont.className} backButton greenHover textScar`}>back</Link>
    </main>
    </>
  );
}
