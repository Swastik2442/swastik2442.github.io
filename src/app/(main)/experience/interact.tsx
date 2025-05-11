"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { primaryFont } from "@/config";
import { BorderStyle } from "@/components/vcBorders";
import BackButton from "@/components/backButton";
import mergeClasses from "@/utils/css";
import ProjectsRows from "./projectsRows";
import WorkRows from "./workRows";
import styles from "./page.module.css";

function ExperienceUI({ projectsData, workData }: {
    projectsData: ProjectProperties[],
    workData: WorkProperties[]
}) {
  const [tableData, setTableData] = useState<"work" | "projects">("projects");
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
    <BorderStyle tl={1} tr={1.5} br={2.5} bl={1} />
    <main className={styles.main}>
      <div className={styles.descriptionCol} style={{
        flex: (description.image != "" || description.text != "") ? 2 : 0
      }}>
        {(description.image !== "") && <Image src={description.image} alt="Experience Image" width={100} height={100} />}
        {(description.text !== "") && <p>{description.text}</p>}
      </div>
      <div className={styles.detailsCol}>
        <div className={styles.expTable}>
          <table>
            <thead className={mergeClasses(primaryFont.className, "textScar")}>
              <tr>
                <th>{tableData === "work" ? "Org" : "Name"}</th>
                <th>Tech Used</th>
                {tableData === "work" && <th>Timeline</th>}
                <th></th>{/* Link if any */}
              </tr>
            </thead>
            <tbody style={{
              display: tableData === "work" ? "table-row-group" : "none"
            }}>
              <WorkRows data={workData} setDescription={setDescription} />
            </tbody>
            <tbody style={{
              display: tableData === "projects" ? "table-row-group" : "none"
            }}>
              <ProjectsRows data={projectsData} setDescription={setDescription} />
            </tbody>
          </table>
        </div>
        <div className={styles.bottomButtons}>
          <div>
            <button className={mergeClasses(
              "textScar",
              primaryFont.className,
              tableData === "work" ? `${styles.selectedButton}` : "greenHover",
            )} onClick={getWorkData}>
              work
            </button>
            <button className={mergeClasses(
              "textScar",
              primaryFont.className,
              tableData === "projects" ? `${styles.selectedButton}` : "greenHover",
            )} onClick={getProjectsData}>
              projects
            </button>
          </div>
          <BackButton variant="small"/>
        </div>
      </div>
    </main>
    </>
  );
}

export default memo(ExperienceUI);
