"use client";

import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { githubUsername, startYear } from "@/config";
import { LinkIcon } from "./icons";

interface ProjectProperties {
  name: string;
  tech: string;
  time: string;
  description: string;
  repoUrl: string;
  langUrl: string;
  createdAt: Date;
  pushedAt: Date;
};

export default function ProjectsRows({ setDescription }: { setDescription: Dispatch<SetStateAction<{ image: string; text: any; }>> }) {
  const [projects, setProjects] = useState<ProjectProperties[]>([]);
  useEffect(() => {
    async function getProjects() {
      let response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
      let responseJson = await response.json();
      if (!(responseJson instanceof Array)) return;

      let projectsData: ProjectProperties[] = responseJson.filter(
        (repo: any) => (repo.fork === false && new Date(repo.pushed_at).getFullYear() >= startYear)
      ).map((repo: any) => ({
        name: repo.name,
        tech: "-",
        time: "",
        description: repo.description,
        repoUrl: repo.html_url,
        langUrl: repo.languages_url,
        createdAt: new Date(repo.created_at),
        pushedAt: new Date(repo.pushed_at),
      }));

      projectsData.sort((a: ProjectProperties, b: ProjectProperties) => b.pushedAt.getTime() - a.pushedAt.getTime());
      projectsData.forEach(async (project: ProjectProperties, index: number) => {
        project.name = project.name.replace(/[_-]/g, " ");
        projectsData[index].name = (project.name.length > 25)
                                 ? (project.name.slice(0, 11).trim() + "..." + project.name.slice(project.name.length - 11).trim())
                                 : project.name;

        let langsResponse = await fetch(project.langUrl);
        let langsResponseJson = await langsResponse.json();
        let tech = "";
        for (let lang in langsResponseJson)
          tech += `, ${lang}`;  
        if (tech.length > 0)
          projectsData[index].tech = tech.slice(2);

        let endDate = project.pushedAt.toLocaleString([], { month: "short", year: "numeric" });
        if (project.createdAt.getFullYear() === project.pushedAt.getFullYear()) {
          let startDate = project.createdAt.toLocaleString([], { month: "short" });
          projectsData[index].time = `${startDate}-${endDate}`;
        } else {
          let startDate = project.createdAt.toLocaleString([], { month: "short", year: "numeric" });
          projectsData[index].time = `${startDate} - ${endDate}`;
        }
      });

      setProjects(projectsData);
    }
    getProjects();
  }, []);

  return (
    <>
      {projects.map((project: any) => (
        <tr key={project.name} onClick={() => setDescription({ image: "", text: project.description })}>
          <td>{project.name}</td>
          <td>{project.tech}</td>
          <td>{project.time}</td>
          <td><Link href={project.repoUrl} target="_blank"><LinkIcon width="15px" height="15px" /></Link></td>
        </tr>
      ))}
    </>
  )
}
