"use client";

import { memo, useMemo, useEffect } from "react";
import { useApp } from "@/contexts/appProvider";
import useClient from "@/hooks/useClient";
import { mainPath } from "@/utils/paths";
import { areObjectsEqual } from "@/utils/others";

const defaultValues = { theta: 0, radius: 0 }, defaultRadiusRatio = 0.1;

export function VCBorders({ children, ...props }: {
  children: React.ReactNode,
  props?: JSX.IntrinsicElements["div"]
}) {
  const { bgCoords } = useApp();
  const clipPath = useMemo(() => bgCoords ? mainPath(bgCoords) : "none", [bgCoords]);

  const isClient = useClient();
  if (!isClient)
    return <>{children}</>;

  return (
    <div className="main" style={{ clipPath: clipPath }} {...props}>
      <div className="vcBackground">{children}</div>
    </div>
  );
}

function ChangeBordersStyle({
  tl = defaultValues, tr = defaultValues, br = defaultValues, bl = defaultValues
} : {
  tl?: TransposeValues | number;
  tr?: TransposeValues | number;
  br?: TransposeValues | number;
  bl?: TransposeValues | number;
}) {
  const { windowSize, transposeCoordsValues, transposeCoords } = useApp();

  useEffect(() => {
    if (typeof tl === "number" || typeof tr === "number" || typeof br === "number" || typeof bl === "number") {
      if (!windowSize) return;
      const defaultRadius = defaultRadiusRatio * Math.min(windowSize.height, windowSize.width);

      if (typeof tl === "number")
        tl = { theta: tl, radius: defaultRadius }
      if (typeof tr === "number")
        tr = { theta: tr, radius: defaultRadius }
      if (typeof br === "number")
        br = { theta: br, radius: defaultRadius }
      if (typeof bl === "number")
        bl = { theta: bl, radius: defaultRadius }
    }

    if (transposeCoordsValues && (
      areObjectsEqual(transposeCoordsValues.tl, tl) &&
      areObjectsEqual(transposeCoordsValues.tr, tr) &&
      areObjectsEqual(transposeCoordsValues.br, br) &&
      areObjectsEqual(transposeCoordsValues.bl, bl)
    )) return;

    transposeCoords({ tl, tr, br, bl });
  }, [transposeCoordsValues, tl, tr, br, bl]);

  return <></>;
}
export const BorderStyle = memo(ChangeBordersStyle);

export default memo(VCBorders);
