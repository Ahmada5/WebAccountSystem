import axios from "axios";
import { useEffect, useState } from "react";

function Showdata() {
   const [data, setLogData] = useState(null);
   useEffect(() => {
      const fetchLogData = async () => {
         try {
            const response = await axios.get("http://localhost:3031/logins");
            setLogData(response.data);
            console.log(response.data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchLogData();
   }, []);

   return (
      <>
         <div className="flex flex-col justify-center bg-slate-400 h-screen">
            <h1 className="text-2xl font-bold text-center">Dashboard</h1>
            <div className="flex justify-center bg-green-800 overflow-auto w-screen">
               <table className="w-auto overflow-auto  bg-indigo-300 ">
                  <thead>
                     <tr>
                        <th className="border p-3">#</th>
                        <th className="border p-3">Username</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Password</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data &&
                        data.map((item, index) => (
                           <tr key={item.id}>
                              <td className="border p-3 ">{index + 1}</td>
                              <td className="border p-3 ">{item.username}</td>
                              <td className="border p-3 ">{item.email}</td>
                              <td className="border p-3 ">{item.password}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}
export default Showdata;
