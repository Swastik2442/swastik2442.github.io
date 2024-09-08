"use client";

import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { githubUsername, startYear } from "@/config";
import { LinkIcon, LoadingIcon } from "./icons";

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
      let response = await fetch(`https://api.github.com/users/${githubUsername}/repos`, { next: { revalidate: 25200 } });
      if (!(response.ok)) return;
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
      for (let index = 0; index < projectsData.length; index++) {
        let langsResponse = await fetch(projectsData[index].langUrl, { next: { revalidate: 50400 } });
        if (!(langsResponse.ok)) break;
        let langsResponseJson = await langsResponse.json().then((data: any) => Object.keys(data));

        let tech = "";
        for (let langIndex = 0; langIndex < Math.min(langsResponseJson.length, 3); langIndex++)
          tech += `, ${langsResponseJson[langIndex]}`;
        if (tech.length > 0)
          projectsData[index].tech = tech.slice(2);
      }

      for (let index = 0; index < projectsData.length; index++) {
        let project = projectsData[index];
        project.name = project.name.replace(/[_-]/g, " ");
        projectsData[index].name = (project.name.length > 25)
                                 ? (project.name.slice(0, 11).trim() + "..." + project.name.slice(project.name.length - 11).trim())
                                 : project.name;

        let endDate = project.pushedAt.toLocaleString([], { month: "short", year: "numeric" });
        if (project.createdAt.getFullYear() === project.pushedAt.getFullYear()) {
          let startDate = project.createdAt.toLocaleString([], { month: "short" });
          projectsData[index].time = `${startDate}-${endDate}`;
        } else {
          let startDate = project.createdAt.toLocaleString([], { month: "short", year: "numeric" });
          projectsData[index].time = `${startDate} - ${endDate}`;
        }
      }

      setProjects(projectsData);
    }
    getProjects();
  }, []);

  return (
    <>
      {projects.length > 0 ? projects.map((project, index) => (
        <tr key={index} onClick={() => setDescription({ image: "", text: project.description })}>
          <td>{project.name}</td>
          <td>{project.tech}</td>
          <td>{project.time}</td>
          <td><Link href={project.repoUrl} target="_blank"><LinkIcon width={18} height={18} /></Link></td>
        </tr>
      )) : (
        <tr>
          <td><LoadingIcon width={18} height={18} fill="white" /></td>
          <td><LoadingIcon width={18} height={18} fill="white" /></td>
          <td><LoadingIcon width={18} height={18} fill="white" /></td>
          <td><LoadingIcon width={18} height={18} fill="white" /></td>
        </tr>
      )}
    </>
  )
}
