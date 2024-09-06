"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryFont, tertiaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";
import ProjectsRows from "@/app/_components/projectsRows";
import WorkRows from "@/app/_components/workRows";

export default function experience() {
  const [tableData, setTableData] = useState("projects");
  const getWorkData = () => { if (tableData !== "work") setTableData("work"); }
  const getProjectsData = () => { if (tableData !== "projects") setTableData("projects"); }

  return (
    <>
    <BorderStyle up={0} down={0} left={0} right={0} />
    <main className={styles.main}>
      <div className={styles.descriptionCol}>
        Description Here
      </div>
      <div className={styles.detailsCol}>
        <div className={styles.expTable}>
          <table>
            <thead className={`${primaryFont.className} textScar`}>
              <tr>
                <th>Name</th>
                <th>Tech</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={tertiaryFont.className} style={{ display: tableData === "work" ? "table-row-group" : "none" }}>
              <WorkRows />
            </tbody>
            <tbody className={tertiaryFont.className} style={{ display: tableData === "projects" ? "table-row-group" : "none" }}>
              <ProjectsRows />
            </tbody>
          </table>
        </div>
        <div className={styles.bottomButtons}>
          <div>
            <button className={`${primaryFont.className} ${tableData === "work" ? `${styles.selectedButton}` : "greenHover"} textScar`} onClick={getWorkData}>work</button>
            <button className={`${primaryFont.className} ${tableData === "projects" ? `${styles.selectedButton}` : "greenHover"} textScar`} onClick={getProjectsData}>projects</button>
          </div>
          <Link href="/" className={`${primaryFont.className} greenHover textScar`}>back</Link>
        </div>
      </div>
    </main>
    </>
  );
}
