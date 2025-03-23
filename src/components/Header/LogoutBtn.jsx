import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-base font-medium text-gray-800 transition duration-300 rounded-lg hover:bg-red-500 hover:text-white"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
