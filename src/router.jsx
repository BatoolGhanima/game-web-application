import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from './components/home/HomePage'
import MainContent from './components/MainContent'
import { Layout } from "./components/Layout";
import SideBar from "./components/SideBar";
import Sides from "./components/sides";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails";
import Favorite from "./components/Favorite";

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
      path: '/game/:id',
      element: <GameDetails/>,
      errorElement: <ErrorPage></ErrorPage>
    
    },
    
      {
        path: '/favorite',
        element: <Favorite />,
        errorElement: <ErrorPage />
      }
      

     

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

export default router