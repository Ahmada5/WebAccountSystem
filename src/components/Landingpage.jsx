import React from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import logocoffe from "../assets/coffee-maker.png";

function LandingPage() {
   const accessToken = localStorage.getItem("accessToken");
   const expiryTimestamp = localStorage.getItem("expiryTimestamp");
   let haveAccess = false;

   if (accessToken && expiryTimestamp) {
      const currentTime = Date.now() / 1000;
      console.log("now: " + currentTime * 1000);
      console.log("exp: " + expiryTimestamp * 1000);
      if (currentTime < expiryTimestamp) {
         haveAccess = true;
      }
   }

   if (haveAccess) {
      return <Redirect to="/Dasboard" />;
   } else {
      return (
         <>
            <div className="flex flex-col justify-center bg-slate-500 h-screen">
               <div className="flex flex-col bg-slate-300">
                  <img
                     src={logocoffe}
                     className="flex justify-center m-auto w-40 bg-slate-400"
                  />
               </div>
               <div className="flex-col mt-3 ">
                  <h5>
                     Looks like you haven't logged in yet. Please log in again
                     to access this website. Thank you.
                  </h5>
                  <div className="flex justify-center">
                     <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <Link
                           to="/Login"
                           onClick={() => {
                              window.location.href = "/Login";
                           }}
                        >
                           Log in
                        </Link>
                     </button>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
export default LandingPage;
