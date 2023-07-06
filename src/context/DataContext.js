"use client";

import { SETDATA } from "@/constants";
import { createContext, useReducer } from "react";

export const DataContext = createContext();
const data_reducer = (state, action) => {
  switch (action.type) {
    case SETDATA:
      return {
        dataSet: action.payload,
      };
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(data_reducer, { dataSet: [] });
  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
