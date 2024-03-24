import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import icgoogle from "../assets/google.svg";
import icgithub from "../assets/github2.svg";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const response = await axios.get("http://localhost:3031/logins");
         const data = response.data;
         const user = data.find(
            (login) =>
               login.username === username && login.password === password
         );
         if (!user) {
            throw new Error("Invalid username or password");
         }
         window.location.href = "/dasboard";
      } catch (error) {
         setError(error.message);
      }
   };
   return (
      <>
         <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-b from-blue-500 to-blue-300 mt-0">
            <div className="flex flex-col justify-between bg-white rounded p-10 lg:w-2/5 lg:h-60vh">
               <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                  Login
               </h2>
               {error && (
                  <p className="text-red-500 text-center font-bold">{error}</p>
               )}
               <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm ">
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <div>
                           <label
                              htmlFor="username"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           ></label>
                           <input
                              id="username"
                              name="username"
                              type="text"
                              required
                              value={username}
                              placeholder="Username"
                              onChange={(e) => setUsername(e.target.value)}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           />
                        </div>
                        <div className="mt-5">
                           <label
                              htmlFor="password"
                              className="block text-sm font-medium leading-6 text-gray-900"
                           ></label>
                           <input
                              id="password"
                              name="password"
                              type="password"
                              required
                              value={password}
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                           />
                           <div className="text-sm flex justify-end">
                              <a
                                 href="#"
                                 className="font-semibold text-indigo-600 hover:text-indigo-500"
                              >
                                 Forgot password?
                              </a>
                           </div>
                        </div>

                        <div className="flex mt-5">
                           <button
                              type="submit"
                              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                           >
                              Log in
                           </button>
                        </div>
                     </div>
                  </form>
                  <div className="flex justify-center">
                     <h1>
                        Don't have an account?{" "}
                        <Link
                           to="/signup"
                           className="text-blue-500 hover:underline"
                           onClick={() => {
                              window.location.href = "/signup";
                           }}
                        >
                           Sign up
                        </Link>
                     </h1>
                  </div>

                  <div className="relative mt-16">
                     <hr className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full border-t border-y-black" />
                     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-900">
                        Or
                     </span>
                  </div>
                  <div className="flex flex-col">
                     <div className="flex mt-12 w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        <img
                           src={icgithub}
                           alt="google logo"
                           className="w-3 h-auto mr-3"
                        />
                        <button className="flex  text-sm font-semibold leading-6 text-white shadow-sm ">
                           Log in with Github
                        </button>
                     </div>

                     <div className="flex mt-5 w-full justify-center rounded-md bg-slate-100 px-3 py-1.5 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100">
                        <img
                           src={icgoogle}
                           alt="google logo"
                           className="w-3 h-auto mr-3"
                        />
                        <button className="flex text-sm font-semibold leading-6 text-black shadow-sm ">
                           Log in with Google
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Login;