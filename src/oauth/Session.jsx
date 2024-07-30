import React, { createContext, useState, useContext } from "react";

const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
   const [haveAccess, setHaveAccess] = useState(false);

   return (
      <SessionContext.Provider value={{ haveAccess, setHaveAccess }}>
         {children}
      </SessionContext.Provider>
   );
};
export const useSession = () => useContext(SessionContext);
