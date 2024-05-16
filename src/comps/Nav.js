import React, { useState } from "react";
import Logo from "./../assets/teacher-portal-logo.png";

const Nav = () => {
  const [showUserOption, setShowUserOption] = useState(false);

  const handleAvatarClick = () => {
    setShowUserOption(!showUserOption);
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
  };
  return (
    <div className=" relative   ">
      <div className="max-w-7xl mx-auto flex justify-between items-center   h-[60px] sm:h-[70px] px-6 sm:px-8 ">
        <a href="/">
          <img className="h-[25px] sm:h-[35px]  w-[auto]" src={Logo} />
        </a>
        <div className="relative">
          <img
            className="h-[35px] sm:h-[45px] rounded-[50%] cursor-pointer"
            src="https://mvigneshkumar-portfolio.web.app/static/media/avatar.4a13566bbb5298ab0e63.png"
            onClick={handleAvatarClick}
          />
          {showUserOption && (
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-white w-[120px] rounded-md sm:w-[150px] h-[auto] p-4 absolute z-50 right-0 top-[50px]">
              <button
                className="cursor-pointer w-full bg-[#00a6fb] text-white py-1 sm:py-2 rounded "
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
