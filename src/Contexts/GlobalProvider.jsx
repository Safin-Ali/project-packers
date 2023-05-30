/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
} from 'react';
import useGlobal from '../Hooks/useGlobal';

const globalContext = createContext();

export function GlobalProvider({ children }) {
  const gbValue = useGlobal();
  return (
    <globalContext.Provider value={gbValue}>
      {children}
    </globalContext.Provider>
  );
}

export const useGlobalCtx = () => useContext(globalContext);
