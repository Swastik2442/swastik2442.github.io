import { ownerName, ownerBio, ownerDescription } from "@/config";
import { BorderStyle } from "@/components/vcBorders";
import BackButton from "@/components/backButton";
import styles from "./page.module.css";

export default function Brief() {
  return (
    <>
    <BorderStyle tl={1.25} tr={1.5} br={2.5} bl={1.5} />
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
