import { ownerName, ownerBio, ownerDescription } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import BackButton from "@/app/_components/backButton";
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
      <BackButton />
    </main>
    </>
  );
}
