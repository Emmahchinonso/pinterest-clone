import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalStyles } from "modules/common/api/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
