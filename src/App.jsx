import { useState } from "react";
import Routes from "./routes";
import { DefaultTemplate } from "./components";

function App() {

  return (
    <>
      <DefaultTemplate>
        <Routes />
      </DefaultTemplate>
    </>
  )
}

export default App
