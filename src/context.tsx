import React, { createContext, useState } from "react";

interface ContextValue {
  searchData: any[];
  setSearchData: (data: any[]) => void;
}

export const MainContext = createContext<ContextValue>({
  searchData: [],
  setSearchData: () => {},
});

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchData, setSearchData] = useState<any[]>([]);

  return (
    <MainContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </MainContext.Provider>
  );
};
