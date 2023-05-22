import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./modules/routes";
import { GlobalStyles } from "modules/common/styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
