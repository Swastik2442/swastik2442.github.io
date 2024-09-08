import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { workExpData } from "@/config";
import { LinkIcon } from "./icons";

export default function WorkRows({ setDescription }: { setDescription: Dispatch<SetStateAction<{ image: string; text: string; }>> }) {
  return (
    <>
      {workExpData.map((work, index) => (
        <tr key={index} onClick={() => setDescription({ image: work.image, text: work.description })}>
          <td>{work.name}</td>
          <td>{work.tech}</td>
          <td>{work.time}</td>
          <td><Link href={work.url} target="_blank"><LinkIcon width={18} height={18} /></Link></td>
        </tr>
      ))}
    </>
  )
}
