import React from "react";
import { useMyContext } from "../context/context";
import StudentListing from "./studentListing";
import Nav from "./Nav";

import Login from "./Login";

const Layout = () => {
  const { User, setUser } = useMyContext();
  return (
    <>
      {User ? (
        <>
          <Nav />
          <StudentListing />
        </>
      ) : (
        <Login User={User} setUser={setUser} />
      )}
    </>
  );
};

export default Layout;
