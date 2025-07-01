import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

   const router = createBrowserRouter([
    {

      path: "/",
      element:<><Navbar /><Home/></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login/></>

    },

    ])
   return(

      <>


    <RouterProvider router = {router}/>
  


   </>
   );
}

export default App
