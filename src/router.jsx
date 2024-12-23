import {createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Layout from "./components/Layout/Layout"
import UserInfo from "./pages/UserInfo"
import CardItem from "./pages/CardItem"
import Service from "./pages/Service"
import Post from "./pages/Post"

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "userinfo/:id",
                element: <UserInfo/>
            }, 
            {
                path: "card-item/:id",
                element: <CardItem/>
            },
            {
                path:"service",
                element: <Service/>
            },
            {
                path:"post",
                element: <Post/>
            }
        ]
    },
   
   
])