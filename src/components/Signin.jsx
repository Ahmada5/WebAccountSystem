import axios from "axios";
import { useEffect, useState } from "react";
import iceye from "../assets/eye.svg";
import iceyeoff from "../assets/eyeoff.svg";
import { Link } from "react-router-dom";

function Signin() {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [password2, setPassword2] = useState("");
   const [showPass, setshowPass] = useState(false);
   const [showPass2, setshowPass2] = useState(false);

   const [isFormValid, setIsFormValid] = useState(true);
   const [vMess_length, setValidationMessagelength] = useState("");
   const [vMess_upcase, setValidationMessageupcase] = useState("");
   const [vMess_num, setValidationMessagenum] = useState("");
   const [vMess_confirm, setValidationMessageconfirm] = useState("");

   //username
   const handle_SetUsername = (e) => {
      setUsername(e.target.value);
   };

   //email
   const handle_SetEmail = (e) => {
      setEmail(e.target.value);
   };

   //pass
   const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      finalValidate(newPassword, password2);
   };

   const handlePasswordChange2 = (e) => {
      const newPassword2 = e.target.value;
      setPassword2(newPassword2);
      finalValidate(password, newPassword2);
   };

   const finalValidate = (password, password2) => {
      let isFormValid = true;
      console.log("password : " + password + " " + password2);

      // Validate password length
      if (password.length < 8) {
         setValidationMessagelength(
            "Password must be at least 8 characters long"
         );
         isFormValid = false;
      } else {
         setValidationMessagelength("");
      }

      // Validate uppercase letters
      if (!/[A-Z]/.test(password)) {
         setValidationMessageupcase(
            "Password must contain at least one uppercase letter"
         );
         isFormValid = false;
      } else {
         setValidationMessageupcase("");
      }

      // Validate numbers
      if (!/\d/.test(password)) {
         setValidationMessagenum("Password must contain at least one number");
         isFormValid = false;
      } else {
         setValidationMessagenum("");
      }

      // Validate password confirmation
      if (password !== password2) {
         setValidationMessageconfirm("Passwords do not match");
         isFormValid = false;
      } else {
         setValidationMessageconfirm("");
      }

      setIsFormValid(isFormValid);
      if (isFormValid) {
         console.log("sign in validation: valid");
      } else {
         console.log("sign in validation: not valid");
      }
   };

   //hide and show pass
   const passVisibility = () => {
      setshowPass(!showPass);
   };
   const passVisibility2 = () => {
      setshowPass2(!showPass2);
   };

   //submit
   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios.post("http://localhost:3031/logins", {
            username,
            email,
            password,
         });
         console.log("Data submitted successfully!");
         // Optionally, you can redirect the user to another page upon successful submission
      } catch (error) {
         console.error("Error submitting data:", error);
         // Optionally, handle the error state or display an error message
      }
   };

   return (
      <>
         <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-b from-blue-500 to-blue-300 mt-0">
            <div className="flex flex-col justify-between bg-white rounded p-10 lg:w-2/5 lg:h-60vh">
               <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create your account
               </h2>
               <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                     <div>
                        <div>
                           <label
                              htmlFor="teks"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Username
                           </label>
                           <input
                              id="username"
                              name="username"
                              type="teks"
                              required
                              onChange={handle_SetUsername}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           />
                        </div>
                        <div className="mt-4">
                           <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Email address
                           </label>
                           <input
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              onChange={handle_SetEmail}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           />
                        </div>

                        <div className="mt-4">
                           <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Password
                           </label>
                           <div className="flex flex-row">
                              <input
                                 id="password"
                                 name="password"
                                 type={showPass ? "text" : "password"}
                                 autoComplete="current-password"
                                 required
                                 onChange={handlePasswordChange}
                                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <button
                                 type="button"
                                 onClick={passVisibility}
                                 className=""
                              >
                                 {showPass ? (
                                    <img
                                       src={iceye}
                                       alt="eyelog"
                                       className="w-5 h-auto ml-3"
                                    />
                                 ) : (
                                    <img
                                       src={iceyeoff}
                                       alt="eyelogoff"
                                       className="w-5 h-auto ml-3"
                                    />
                                 )}
                              </button>
                           </div>
                        </div>
                        <div className="mt-4">
                           <label
                              htmlFor="password2"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           >
                              Confirm Password
                           </label>
                           <div className="flex flex-row">
                              <input
                                 id="password2"
                                 name="password2"
                                 type={showPass2 ? "text" : "password"}
                                 autoComplete="new-password"
                                 required
                                 onChange={handlePasswordChange2}
                                 className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                              <button
                                 type="button"
                                 onClick={passVisibility2}
                                 className=""
                              >
                                 {showPass2 ? (
                                    <img
                                       src={iceye}
                                       alt="eyelog"
                                       className="w-5 h-auto ml-3"
                                    />
                                 ) : (
                                    <img
                                       src={iceyeoff}
                                       alt="eyelogoff"
                                       className="w-5 h-auto ml-3"
                                    />
                                 )}
                              </button>
                           </div>
                        </div>
                        <div>
                           {vMess_length && (
                              <p
                                 className={`text-[0.625rem] font-bold mt-1 ${
                                    password.length < 8
                                       ? "text-red-500"
                                       : "text-green-500"
                                 }`}
                              >
                                 {password.length < 8 ? "✗ " : "✓ "}{" "}
                                 {vMess_length}
                              </p>
                           )}
                           {vMess_upcase && (
                              <p
                                 className={`text-[0.625rem] font-bold mt-1 ${
                                    !/[A-Z]/.test(password)
                                       ? "text-red-500"
                                       : "text-green-500"
                                 }`}
                              >
                                 {!/[A-Z]/.test(password) ? "✗ " : "✓ "}{" "}
                                 {vMess_upcase}
                              </p>
                           )}
                           {vMess_num && (
                              <p
                                 className={`text-[0.625rem] font-bold mt-1 ${
                                    !/\d/.test(password)
                                       ? "text-red-500"
                                       : "text-green-500"
                                 }`}
                              >
                                 {!/\d/.test(password) ? "✗ " : "✓ "}{" "}
                                 {vMess_num}
                              </p>
                           )}
                           {vMess_confirm && (
                              <p
                                 className={`text-[0.625rem] font-bold mt-1 ${
                                    password !== password2
                                       ? "text-red-500"
                                       : "hidden"
                                 }`}
                              >
                                 {password !== password2 ? "✗ " : "✓ "}{" "}
                                 {vMess_confirm}
                              </p>
                           )}
                        </div>

                        <div className="flex mt-5">
                           <button
                              type="submit"
                              disabled={!isFormValid}
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-red-500"
                           >
                              <Link
                                 to="/dasboard"
                                 onClick={() => {
                                    window.location.href = "/dasboard";
                                 }}
                              >
                                 Sign in
                              </Link>
                              
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}

export default Signin;
