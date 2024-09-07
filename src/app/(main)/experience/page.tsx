"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { primaryFont, tertiaryFont } from "@/config";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";
import ProjectsRows from "@/app/_components/projectsRows";
import WorkRows from "@/app/_components/workRows";

export default function Experience() {
  const [tableData, setTableData] = useState("projects");
  const [description, setDescription] = useState({ image: "", text: "" });

  const getWorkData = () => {
    setTableData("work");
    setDescription({ image: "", text: "" });
  }
  const getProjectsData = () => {
    setTableData("projects");
    setDescription({ image: "", text: "" });
  }

  return (
    <>
    <BorderStyle up={-1} down={-1.5} left={2.5} right={-1} />
    <main className={styles.main}>
      <div className={styles.descriptionCol} style={{ flex: (description.image != "" || description.text != "") ? 1 : 0 }}>
        {(description.image !== "") ? <Image src={description.image} alt="Image showcasing Experience" width={100} height={100} /> : ""}
        {(description.text !== "") ? <p>{description.text}</p> : ""}
      </div>
      <div className={styles.detailsCol}>
        <div className={styles.expTable}>
          <table>
            <thead className={`${primaryFont.className} textScar`}>
              <tr>
                <th>Name</th>
                <th>Tech Used</th>
                <th>Timeline</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={tertiaryFont.className} style={{ display: tableData === "work" ? "table-row-group" : "none" }}>
              <WorkRows setDescription={setDescription} />
            </tbody>
            <tbody className={tertiaryFont.className} style={{ display: tableData === "projects" ? "table-row-group" : "none" }}>
              <ProjectsRows setDescription={setDescription} />
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
