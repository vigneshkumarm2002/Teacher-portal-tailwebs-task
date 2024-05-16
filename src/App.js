import React, { useState } from "react";
import Layout from "./comps/layout";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { MyProvider, useMyContext } from "./context/context";

const App = () => {
  return (
    <>
      <MyProvider>
        <SnackbarProvider />
        <Layout />
      </MyProvider>
    </>
  );
};

export default App;
