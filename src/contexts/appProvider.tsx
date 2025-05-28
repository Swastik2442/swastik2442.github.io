"use client";

import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction, useMemo } from "react";
import useQuery from "@/hooks/useQuery";
import useWindowSize from "@/hooks/useWindowSize";
import { getOrientation, getScreenSize } from "@/utils/others";
import { getCoordinates } from "@/utils/paths";

export interface AppProviderState {
  /** Data for Image to be used on Quit Site Page */
  qImg: {
    data: QImg | null;
    error: any;
    loading: boolean;
  };
  /** Function to refetch the Quit Site Page Image Data */
  refreshQImg: () => void;

  /** Coordinates of the Background Clip Path */
  bgCoords: QuadrilateralCoords | null;
  /** Values used to transpose the Coordinates of the Background Clip Path */
  transposeCoordsValues: QuadrilateralTranspose | null;
  /** Function to transpose the Coordinates of the Background Clip Path */
  transposeCoords: Dispatch<SetStateAction<QuadrilateralTranspose | null>>;

  /** Size of the current Browser Window */
  windowSize: WindowSize | undefined;
  /** Date till the User is Rate Limited */
  limitedTill: Date | null;
  /** Function to set the Date till the User is Rate Limited */
  setLimitedTill: Dispatch<SetStateAction<Date | null>>;
}

const initialState: AppProviderState = {
  qImg: { data: null, error: null, loading: false },
  refreshQImg: () => console.error("refreshQImg not implemented"),
  bgCoords: null,
  transposeCoordsValues: null,
  transposeCoords: () => console.error("transposeCoords not implemented"),
  windowSize: undefined,
  limitedTill: null,
  setLimitedTill: () => console.error("setLimitedTill not implemented"),
};

let didInit = false;

const AppProviderContext = createContext<AppProviderState>(initialState);

/**
 * A Context Provider to handle the overall App
 * @param children Children components to the AppProvider
 * @param props Additional props to the AppProvider
 */
export function AppProvider({ children, ...props }: { children: React.ReactNode }) {
  const screenSize = getScreenSize();
  const windowSize = useWindowSize();

  const [limitedTill, setLimitedTill] = useState<AppProviderState["limitedTill"]>(null);
  const [coordsTranspose, setCoordsTranspose] = useState<AppProviderState["transposeCoordsValues"]>(null);
  const bgCoords = useMemo<AppProviderState["bgCoords"]>(
    () => windowSize ? getCoordinates(windowSize, coordsTranspose) : null,
    [windowSize, coordsTranspose]
  );

  const {
    data: qImgData,
    error: qImgError,
    loading: qImgLoading,
    doFetch: refreshQImg
  } = useQuery<QImg>(
    `/api/qimg/${getOrientation(screenSize)}`, {
    cache: "force-cache",
    next: { revalidate: 604800 }
  }, false);

  useEffect(() => {
    if (didInit) return;
    didInit = true;

    refreshQImg();
  }, [refreshQImg]);

  const value: AppProviderState = {
    qImg: { data: qImgData, error: qImgError, loading: qImgLoading },
    refreshQImg: refreshQImg,
    bgCoords: bgCoords,
    transposeCoordsValues: coordsTranspose,
    transposeCoords: setCoordsTranspose,
    windowSize: windowSize,
    limitedTill: limitedTill,
    setLimitedTill: setLimitedTill,
  };

  return (
    <AppProviderContext.Provider {...props} value={value}>
      {children}
    </AppProviderContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppProviderContext);
  if (context === undefined)
    throw new Error("useApp must be used within an AppProvider");
  return context;
};
