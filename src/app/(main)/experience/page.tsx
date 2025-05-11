import { workExpData } from "@/config";
import ExperienceUI, { ExperienceUIBorderStyle } from "./interact";

async function getProjects() {
  const response = await import("@/app/api/projects/route");
  const responseJson = await (await response.GET()).json();
  if (responseJson?.projects)
    return responseJson.projects as ProjectProperties[];
  return [];
}

export default async function Experience() {
  const projectsData = await getProjects();
  return (
    <>
      <ExperienceUIBorderStyle />
      <ExperienceUI projectsData={projectsData} workData={workExpData} />
    </>
  );
}
