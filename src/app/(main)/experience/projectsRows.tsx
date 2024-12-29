import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { LinkIcon, LoadingIcon } from "@/app/_components/icons";

// Using separate Function as it gets embedded inside a Client Component

async function getProjects() {
  let response = await fetch("/api/projects");
  if (!(response.ok)) return [];
  let responseJson = await response.json();
  if (responseJson.projects)
    return responseJson.projects;
  return [];
}

export default function ProjectsRows({ setDescription }: {
  setDescription: Dispatch<SetStateAction<{
    image: string;
    text: string;
  }>>
}) {
  const projects: ProjectProperties[] = [];
  getProjects().then((data) => data.forEach((project: ProjectProperties) => projects.push(project)));

  return (
    <>
      {projects.length > 0 ? projects.map((project, index) => (
        <tr key={index} onClick={() => setDescription({
          image: "",
          text: project.description
        })}>
          <td>{
            (project.name.length > 25)
            ? (project.name.slice(0, 11).trim() + "..." + project.name.slice(project.name.length - 11).trim())
            : project.name
          }</td>
          <td>{project.tech}</td>
          <td>
            <Link href={project.repoUrl} target="_blank">
              <LinkIcon width={18} height={18} />
            </Link>
          </td>
        </tr>
      )) : (
        <tr>
          <td colSpan={4}>
            <LoadingIcon width={18} height={18} fill="white" />
          </td>
        </tr>
      )}
    </>
  )
}
