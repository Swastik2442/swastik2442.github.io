import { ownerName } from "../../config";
import styles from "./page.module.css";

export default function Quit() {
  const fromTitle = ownerName.trim().split(/(\s+)/).filter(e => e.trim().length > 0);
  return (
    <>
    <main className={styles.main}>
      <div className={styles.greetings}>
        Greetings from
      </div>
      <div className={styles.fromTitle}>
        {fromTitle.map((text, idx) => <p key={idx}>{text}</p>)}
      </div>
    </main>
    </>
  );
}
