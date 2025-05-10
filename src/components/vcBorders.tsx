"use client";

import { memo, useMemo } from "react";
import { mainPath } from "@/utils/paths";
import useWindowSize from "@/hooks/useWindowSize";
import useClient from "@/hooks/useClient";

export function VCBorders({ children, ...props }: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements["div"]
}) {
  const windowSize = useWindowSize();
  const clipPath = useMemo(() => windowSize ? mainPath(windowSize) : "none", [windowSize]);

  const isClient = useClient();
  if (!isClient)
    return <>{children}</>;

  return (
    <div className="main" style={{ clipPath: clipPath }} {...props}>
      <div className="vcBackground">{children}</div>
    </div>
  );
}

export default memo(VCBorders);
