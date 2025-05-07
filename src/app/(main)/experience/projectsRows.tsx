import { Dispatch, SetStateAction, memo } from "react";
import Link from "next/link";
import { LinkIcon, LoadingIcon } from "@/app/_components/icons";

function ProjectsRows({ data, setDescription }: {
  data: ProjectProperties[],
  setDescription: Dispatch<SetStateAction<{
    image: string;
    text: string;
  }>>
}) {
  return (
    <>
      {data.length > 0 ? data.map((project, index) => (
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

export default memo(ProjectsRows);
