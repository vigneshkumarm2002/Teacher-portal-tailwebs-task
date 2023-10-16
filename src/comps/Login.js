import React, { useState,useEffect } from 'react';
import ExpensesPage from "./Expenses"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [User,setUser]=useState("")

  useEffect(()=>{
    setUser(localStorage.getItem("email"))
  },[])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setUser(email)
    localStorage.setItem("email",email)
  };




  return (
    <>
    {User? <ExpensesPage/>:
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <div className="bg-white p-5 sm:p-8 rounded-lg  w-[95%] sm:w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]" >
        <h1 className="text-xl sm:text-2xl font-bold mb-4 ">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 border rounded w-full "
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-[#1b8381] font-medium sm:font-semibold text-white py-2 rounded hover:bg-[#125957]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  }
  </>
  );
};

export default Login;
