import { primaryFont, tertiaryFont } from "@/config";
import BorderStyle from "@/components/vcBordersStyle";
import BackButton from "@/components/backButton";
import mergeClasses from "@/utils/css";
import styles from "./page.module.css";

export const revalidate = 604800; // 1 week

export default async function Stats() {
  const response = await import("@/app/api/stats/route");
  const responseJson = await (await response.GET()).json();
  let langStats: WakatimeType[] = [];
  if (responseJson?.languages)
    langStats = responseJson.languages;

  return (
    <>
    <BorderStyle up={1} down={-1.5} left={3.5} right={-1} />
    <main className={styles.main}>
      <div style={{ paddingBottom: 3 + "vh" }}>
        <div className={styles.statsHeading}>
          <div className={mergeClasses(primaryFont.className, "textScar")}>
            Developer Rating:
          </div>
          <div className={tertiaryFont.className}>
            Average (3)
          </div>
        </div>
        <div className={mergeClasses(tertiaryFont.className, styles.tBlueBackground)}>
          <div className={styles.mask}>
            <div className={styles.stats}>
              {langStats.length > 1 && <div className={styles.text}>
                Programming Languages
              </div>}
              {langStats.map((lang) => (
                <div key={lang.name} className={styles.stat}>
                  <span>{lang.name}</span>
                  <span>{lang.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BackButton />
    </main>
    </>
  );
}
