import Link from "next/link";
import { primaryFont, tertiaryFont, wakatimeUsername } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

interface wakatimeType { name: string, total_seconds: number, percent: number, digital: number, decimal: number, text: string, hours: number, minutes: number };

export default async function Stats() {
  let response = await fetch(`https://wakatime.com/api/v1/users/${wakatimeUsername}/stats?is_including_today=true`);
  let responseJson = await response.json();
  let langStats: wakatimeType[] = [];
  let osStats: wakatimeType[] = [];
  if (responseJson.data) {
    langStats = responseJson.data.languages.filter((lang : wakatimeType) => (lang.hours >= 3));
    osStats = responseJson.data.operating_systems;
  }

  return (
    <>
    <BorderStyle up={1} down={-1.5} left={3.5} right={-1} />
    <main className={styles.main}>
      <div style={{ paddingBottom: 3 + "vh" }}>
        <div className={styles.statsHeading}>
          <div className={`${primaryFont.className} textScar`}>Developer Rating:</div>
          <div className={tertiaryFont.className}>Average (3)</div>
        </div>
        <div className={`${tertiaryFont.className} ${styles.tBlueBackground}`}>
          <div className={styles.mask}>
            <div className={styles.stats}>
              {langStats.length > 1 ? <div className={styles.text}>Programming Languages</div> : ""}
              {langStats.map((lang) => (
                <div key={lang.name} className={styles.stat}>
                  <span>{lang.name}</span>
                  <span>{lang.text}</span>
                </div>
              ))}
              {osStats.length > 1 ? <div className={styles.text}>Operating System(s)</div> : ""}
              {osStats.map((os) => (
                <div key={os.name} className={styles.stat}>
                  <span>{os.name}</span>
                  <span>{os.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link href="/" className={`${primaryFont.className} backButton greenHover textScar`}>back</Link>
    </main>
    </>
  );
}
