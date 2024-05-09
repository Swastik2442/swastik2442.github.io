import styles from "./page.module.css";
import { ownerName } from "./layout";

export default function Quit() {
  return (
    <>
    <main className={styles.main}>
      Greetings from {ownerName}
    </main>
    </>
  );
}