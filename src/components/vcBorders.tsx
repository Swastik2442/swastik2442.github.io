"use client";

import { memo, useMemo, useEffect } from "react";
import { mainPath } from "@/lib/paths";
import { useApp } from "@/contexts/appProvider";
import useClient from "@/hooks/useClient";
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
  const defaultRadius = useMemo(
    () => windowSize && (defaultRadiusRatio * Math.min(windowSize.height, windowSize.width)),
    [windowSize]
  );
  const tlV = useMemo(
    () => typeof tl === "number" ? { theta: tl, radius: defaultRadius ?? 0 } : tl,
    [tl, defaultRadius]
  );
  const trV = useMemo(
    () => typeof tr === "number" ? { theta: tr, radius: defaultRadius ?? 0 } : tr,
    [tr, defaultRadius]
  );
  const brV = useMemo(
    () => typeof br === "number" ? { theta: br, radius: defaultRadius ?? 0 } : br,
    [br, defaultRadius]
  );
  const blV = useMemo(
    () => typeof bl === "number" ? { theta: bl, radius: defaultRadius ?? 0 } : bl,
    [bl, defaultRadius]
  );

  useEffect(() => {
    if (transposeCoordsValues && (
      areObjectsEqual(transposeCoordsValues.tl, tlV) &&
      areObjectsEqual(transposeCoordsValues.tr, trV) &&
      areObjectsEqual(transposeCoordsValues.br, brV) &&
      areObjectsEqual(transposeCoordsValues.bl, blV)
    )) return;

    transposeCoords({ tl: tlV, tr: trV, br: brV, bl: blV });
  }, [transposeCoords, transposeCoordsValues, tlV, trV, brV, blV]);

  return <></>;
}
export const BorderStyle = memo(ChangeBordersStyle);

export default memo(VCBorders);
