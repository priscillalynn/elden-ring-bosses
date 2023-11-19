//import { useState } from 'react'
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
//import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/output.css";

function App() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
    <Header/>
    <Main>{elements}</Main>
    <Footer/>
    </>
  )
}

export default App
