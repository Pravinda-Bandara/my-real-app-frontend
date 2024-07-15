import './App.css'
import {Button} from "./components/ui/button.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
        <Outlet />
    </>
  )
}

export default App
