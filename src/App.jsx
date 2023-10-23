import "./styles/index.scss";
import Routes from "./routes";
import { useContext } from "react";
import { HubContext } from "./components/providers/HubContext";
import { Loading } from "./components/Loading";

function App() {

  const { loading } = useContext(HubContext)

  return (
    <>
    {loading ? <Loading/> : <Routes /> }
      {/* <Routes /> */}
    </>
  )
}

export default App
