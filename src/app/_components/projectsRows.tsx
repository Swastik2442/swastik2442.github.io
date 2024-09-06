// import { githubUsername } from "@/config";
import { LinkIcon } from "./icons";

// interface projectDataType { name: string, tech: string, time: string, description: string, link: string };

export default function ProjectsRows() {
  // fetch(`https://api.github.com/users/${githubUsername}/repos`)
  // .then(reposResponse => {
  //   return reposResponse.json();
  // })
  // .then(userRepos => {
  //   userRepos
  //   .filter((repo: any) => (repo.fork === false))
  //   .map((repo: any) => ({
  //     name: repo.name,
  //     tech: repo.languages_url,
  //     time: `${repo.created_at} - ${repo.pushed_at}`,
  //     description: repo.description,
  //     link: repo.html_url,
  //   }));    
  // })
  // .catch(err => {
  //   console.log(err);
  // });

  return (
    <>
      <tr>
        <td>dcba</td>
        <td>dcba</td>
        <td>dcba</td>
        <td><LinkIcon width="15px" height="15px" /></td>
      </tr>
    </>
  )
}
