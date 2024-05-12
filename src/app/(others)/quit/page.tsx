import styles from "./page.module.css";
import { ownerName } from "./layout";

export default function Quit() {
  const fromTitle = ownerName.trim().split(" ");
  return (
    <>
    <main className={styles.main}>
      <div className={styles.greetings}>
        Greetings from
      </div>
      <div className={styles.fromTitle}>
        {fromTitle.map(i => <p>{i}</p>)}
      </div>
    </main>
    </>
  );
}
