import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from './components/home/HomePage'
import MainContent from './components/MainContent'
import { Layout } from "./components/Layout";
import SideBar from "./components/SideBar";
import Sides from "./components/sides";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout> </Layout>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage></ErrorPage>
        
      },
      {
        path: '/mainContent',
        element: <MainContent />,
        errorElement: <ErrorPage></ErrorPage>
      
      },
      {
        path: '/sidebar',
        element: <Sides></Sides>,
        errorElement: <ErrorPage></ErrorPage>
       
      },

     

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

export default router