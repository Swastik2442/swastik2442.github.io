import Link from "next/link";
import { ownerName, ownerBio, ownerDescription, primaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

export default function Brief() {
  return (
    <>
    <BorderStyle up={1.25} down={-1.5} left={-2.5} right={1.5} />
    <main className={styles.main}>
      <div>
        <p className={styles.shortBrief}>
          <span>{ownerName}</span>
          <span>{ownerBio}</span>
        </p>
        <hr></hr>
        {ownerDescription.trim().split(/[\n\v\f\r]+/g).map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <Link href="/" className={`${primaryFont.className} backButton greenHover textScar`}>back</Link>
    </main>
    </>
  );
}
