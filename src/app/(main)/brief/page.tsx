import { ownerName, ownerBio, ownerDescription } from "@/config";
import { BorderStyle } from "@/components/vcBorders";
import BackButton from "@/components/backButton";
import { toRadians } from "@/utils/others";
import styles from "./page.module.css";

export default function Brief() {
  return (
    <>
    <BorderStyle tl={toRadians(100)} tr={toRadians(30)} br={toRadians(-90)} bl={toRadians(-50)} />
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
