"use client"

import { useState, useEffect } from "react";
import { ownerTimezone } from "@/config";

const getOwnerTime = function() {
  return new Date().toLocaleString(
    undefined,
    {timeZone: ownerTimezone, hour: '2-digit', minute: '2-digit', hour12: true}
  );   
}

export default function OwnerTime() {
  const [time, setTime] = useState(getOwnerTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getOwnerTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <time suppressHydrationWarning>{time}</time>
  )
}
