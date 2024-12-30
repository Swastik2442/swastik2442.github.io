import { githubUsername, startYear } from "@/config";

export const revalidate = 604800; // 1 week

export async function GET() {
  let response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
  if (!(response.ok))
    return Response.json({ projects: [] });
  let responseJson = await response.json();
  if (!(responseJson instanceof Array))
    return Response.json({ projects: [] });

  // Remove Old & Forked Repos and Sort according to Last Push Date
  let projects: ProjectProperties[] = responseJson.filter(
    (repo: any) => (
      repo.fork === false &&
      new Date(repo.pushed_at).getFullYear() >= startYear &&
      repo.name !== githubUsername
    )
  ).map((repo: any) => ({
    name: repo.name,
    tech: "-",
    time: "",
    description: repo.description,
    repoUrl: repo.homepage == "" ? repo.html_url : repo.homepage,
    langUrl: repo.languages_url,
    pushedAt: new Date(repo.pushed_at),
  })).sort((a, b) => b.pushedAt.getTime() - a.pushedAt.getTime());

  // Get Languages for each Repo until Network Error
  for (let index = 0; index < projects.length; index++) {
    let langsResponse = await fetch(projects[index].langUrl);
    if (!(langsResponse.ok)) break;
    let langsResponseJson = await langsResponse.json().then(
      (data: any) => Object.keys(data)
    );

    let tech = "";
    for (let langIndex = 0; langIndex < Math.min(langsResponseJson.length, 3); langIndex++)
      tech += `, ${langsResponseJson[langIndex]}`;
    if (tech.length > 0)
      projects[index].tech = tech.slice(2);
  }

  // Replace Underscores & Dashes with Spaces
  projects.forEach((project) => {
    project.name = project.name.replace(/[_-]/g, " ");
  });

  return Response.json({ projects });
}
