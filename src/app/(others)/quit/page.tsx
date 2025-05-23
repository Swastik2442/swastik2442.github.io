"use client";

import dynamic from "next/dynamic";
import { ownerName, secondaryFont, tertiaryFont, quaternaryFont } from "@/config";
import { mergeClasses } from "@/utils/css";
import styles from "./page.module.css";

const QuitImgContainer = dynamic(() => import("./qImg"), { ssr: false });

export default function Quit() {
  const fromTitle = ownerName.trim().split(/(\s+)/).filter(e => e.trim().length > 0);
  return (
    <>
    <QuitImgContainer>
      <div className={styles.textContainer}>
        <div className={styles.textContainerRotated}>
          <div className={mergeClasses(styles.greetings, secondaryFont.className)}>
            Greetings from
          </div>
          <div className={mergeClasses(styles.fromTitle, quaternaryFont.className)}>
            {fromTitle.map((text, idx) => <div key={idx}>{text}</div>)}
          </div>
        </div>
      </div>
    </QuitImgContainer>
    <p className={mergeClasses("footer", tertiaryFont.className, styles.closeTabText)}>
      You can close the tab :)
    </p>
    </>
  );
}
