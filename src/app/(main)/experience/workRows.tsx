import { Dispatch, SetStateAction, memo } from "react";
import Link from "next/link";
import { workExpData } from "@/config";
import { LinkIcon } from "@/app/_components/icons";

function WorkRows({ setDescription }: {
  setDescription: Dispatch<SetStateAction<{
    image: string;
    text: string;
  }>>
}) {
  return (
    <>
      {workExpData.map((work, index) => (
        <tr key={index} onClick={() => setDescription({
          image: work.image ?? "",
          text: work.description
        })}>
          <td>{work.name}</td>
          <td>{work.tech}</td>
          <td>{work.time}</td>
          <td>{work.url &&
            <Link href={work.url} target="_blank">
              <LinkIcon width={18} height={18} />
            </Link>
          }</td>
        </tr>
      ))}
    </>
  )
}

export default memo(WorkRows);
