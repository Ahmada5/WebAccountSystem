import React, { useEffect } from "react";
import { useSession } from "../oauth/Session";

const SessionCheck = () => {
   const { haveAccess, setHaveAccess } = useSession();

   useEffect(() => {
      if (accessToken && expiryTimestamp) {
         const currentTime = Date.now() / 1000;
         console.log("now: " + currentTime * 1000);
         console.log("exp: " + expiryTimestamp * 1000);
         if (currentTime < expiryTimestamp) {
            haveAccess = true;
            setHaveAccess(true);
         }
      }
   }, []);

   return null; // This page doesn't render anything visible
};

export default SessionCheck;
