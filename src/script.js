import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Contest from "./components/Contest"
import ErrorPage from "./components/ErrorPage"
import Explore from "./components/Explore"
import SpecificProblem from "./components/SpecificProblem"
import Login from "./components/Login"
import Home from "./components/Home"
import { useState ,lazy,Suspense,useContext} from "react"
import Discuss from "./components/Discuss"
import Interview from "./components/Interview"
import Store from "./components/Store"
import Notification from "./components/Notification"
import ShimmerUICarousel from "./components/ShimmerUICarousel"
import useLocalStorage from "./utils/useLocalStorage"
import userContext from "./utils/userContext"
import { Provider } from "react-redux"
import store from "./utils/store"
const Problems =lazy(()=>import( "./components/Problems"))
const App = () => {
    const [isLoggedIn,setIsLoggedIn]=useLocalStorage("isLogged");
// const a=useContext(userContext);
    return (
        <>
        <Provider store={store}>
        <userContext.Provider value={{isLoggedIn:isLoggedIn,setIsLoggedIn:setIsLoggedIn}}>
            <Header/>
            <Outlet/>
            <Footer />
            </userContext.Provider>
            </Provider>
        </>
    )
}
// document.documentElement.classList.add("dark-mode")

document.documentElement.classList.add("dark-mode")
const routerElement=createBrowserRouter(
    [
    {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"/",
            element:<Home/>
        
        },
        {
    
            path:"/problems",
            element:<Suspense fallback=<ShimmerUICarousel/>><Problems /></Suspense>,
            children:[  {
                path:":pno",
                element:<SpecificProblem/>
            }]
        
        },
        {
    
            path:"/contest",
            element:<Contest/>
        
        }
        ,
        {
    
            path:"/explore",
            element:<Explore/>
        
        },
        {
            path:"/login",
            
            element:<Login/>
        },
        {
    
            path:"/discuss",
            element:<Discuss/>
        
        },
        {
            path:"/interview",
            element:<Interview/>
        },
        {
            path:"/store",
            
            element:<Store/>
        },
        {
            path:"/notification",
            
            element:<Notification/>

        }
    ]

    
    }
   
    
    ]);
root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={routerElement}/>);



