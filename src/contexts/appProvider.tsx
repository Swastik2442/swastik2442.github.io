"use client";

import { useContext, createContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import useWindowSize from "@/hooks/useWindowSize";

interface AppProviderState {
  /** Data for Image to be used on Quit Site Page */
  qImg: QImg | null;
  /** Function to refetch the Quit Site Page Image Data */
  refreshQImg: () => void;
  /** Size of the current Browser Window */
  windowSize: WindowSize | undefined;
  /** Date till the User is Rate Limited */
  limitedTill: Date | null;
  /** Function to set the Date till the User is Rate Limited */
  setLimitedTill: Dispatch<SetStateAction<Date | null>>;
}

const initialState: AppProviderState = {
  qImg: null,
  refreshQImg: () => console.error("refreshQImg not implemented"),
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
  const [limitedTill, setLimitedTill] = useState<Date | null>(null);
  const [qImg, setQImg] = useState<QImg | null>(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (didInit) return;
    didInit = true;

    // Do Something
  }, [qImg]);

  const value: AppProviderState = {
    qImg: qImg,
    refreshQImg: () => {},
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
