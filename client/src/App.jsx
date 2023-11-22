import { useRoutes, Routes, Route } from "react-router-dom";
import BossDetails from "./pages/BossDetails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
/*
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
*/
import "./styles/index.css";
import "./styles/App.css";

function App() {
  /*
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/BossDetails",
      element: <BossDetails />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);
  */


  return (
    /*
    <>
    <Header />

    <Main>{element}</Main>

    <Footer />
    </>
    */
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bossdetails/:bossId" element={<BossDetails />} />
      <Route path="/*" element={<PageNotFound />} />
   </Routes>
  )
}

export default App
