import React, { useContext, useState } from "react";
import { UserSvg } from "./svg";
import { userContext } from "../../context/userContext";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout, user } = useContext(userContext);
  const logoutHandler = () => {
    if (logout) {
      logout();
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <button
          className="flex items-center justify-between w-full py-2 px-3 rounded hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          onClick={handleDropdownToggle}
        >
          <div className="flex items-center justify-center">
            <UserSvg />
            <span className="mx-2">{user?.userName}</span>
          </div>
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-3 p-2 z-10 font-normal rounded-lg shadow w-44 bg-gray-800 text-gray-400">
            <div className="py-1">
              <button
                className="block px-4 py-2 text-sm font-bold text-center  "
                onClick={logoutHandler}
              >
                log out
              </button>
            </div>
          </div>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
