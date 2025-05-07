import ExperienceUI from "./interact";
import { workExpData } from "@/config";

async function getProjects() {
  const response = await import("@/app/api/projects/route");
  const responseJson = await (await response.GET()).json();
  if (responseJson?.projects)
    return responseJson.projects as ProjectProperties[];
  return [];
}

export default async function Experience() {
  const projectsData = await getProjects();
  return <ExperienceUI projectsData={projectsData} workData={workExpData} />
}
