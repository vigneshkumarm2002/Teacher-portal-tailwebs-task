import React,{useState} from 'react'
import Logo from "./../assets/logo.svg";
import Avatar from "./../assets/avatar.jpg";

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
    <div className=" relative  h-[80px] sm:h-[100px] flex justify-between items-center  ">
    <img className="h-[38px] sm:h-[50px] md:h-[60px] w-[auto]" src={Logo} />
    <img
      className="h-[35px] sm:h-[50px] md:h-[60px] rounded-[50%] cursor-pointer"
      src={Avatar}
      onClick={handleAvatarClick}
    />
    {showUserOption && (
      <div className="shadow-[0_8px_30px_rgb(0,0,0,0.2)] bg-white w-[120px] sm:w-[150px] h-[auto] p-[10px] sm:p-[20px] absolute right-0 top-[65px] sm:right-0 sm:top-[90px]">
        <button
          className=" w-full bg-[#1b8381] text-white py-1 sm:py-2 rounded hover:bg-[#125957]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )}
  </div>
  )
}

export default Nav