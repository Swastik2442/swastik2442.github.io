"use client"
 
import { useSelectedLayoutSegments } from "next/navigation";

export default function PageName() {
  const segments = useSelectedLayoutSegments();
  return (
    <>
      {segments.length > 0 ? segments.at(0) : "pause menu"}
    </>
  )
}
