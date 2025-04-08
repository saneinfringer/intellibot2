// // src/components/Logout.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Logout = () => {
//   const navigate = useNavigate();
//   const { setIsLoggedIn } = useAuth();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
//     >
//       Logout
//     </button>
//   );
// };

// export default Logout;


//can be used in future