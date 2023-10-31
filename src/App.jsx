import "./styles/index.scss";
import Routes from "./routes";
import { useContext } from "react";
import { HubContext } from "./components/providers/HubContext";
import { Loading } from "./components/Loading";
import { ToastContainer } from "react-toastify";

function App() {

  const { loading } = useContext(HubContext)

  return (
    <>
    {loading ? <Loading/> : <Routes /> }
    <ToastContainer autoClose={2000}/>
    </>
  )
}

export default App
