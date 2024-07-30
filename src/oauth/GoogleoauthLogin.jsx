import { useEffect, React } from "react";
import googleIcon from "../assets/google.svg";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
   function handleCallBackResponse(response) {
      console.log("jwt token : " + response.credential);
      var userJwt = jwtDecode(response.credential);
      console.log(userJwt);

      var ex = userJwt.exp;
      console.log(ex);

      // const expirationDate = new Date(ex * 1000);
      // console.log(expirationDate);

      localStorage.setItem('accessToken', response.credential);
      localStorage.setItem('expiryTimestamp', ex);
   }
   useEffect(() => {
      google.accounts.id.initialize({
         client_id:
            "84368377147-vo57pi87rsape933or8m232v106t20bt.apps.googleusercontent.com",
         callback: handleCallBackResponse,
      });

      const container = document.getElementById("logInDiv");
      container.innerHTML = "";

      const customButton = document.createElement("button");
      customButton.className =
         "flex rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100";

      const googleIconImg = document.createElement("img");
      googleIconImg.src = googleIcon;
      googleIconImg.alt = "Google Icon";

      googleIconImg.style.width = "24px";
      googleIconImg.style.height = "24px";

      customButton.appendChild(googleIconImg);

      customButton.addEventListener("click", () => {
         google.accounts.id.prompt();
      });

      container.appendChild(customButton);
   }, []);

   return (
      <div className="flex  w-full justify-center">
         <div className="" id="logInDiv"></div>
      </div>
   );
}

export default LoginPage;
