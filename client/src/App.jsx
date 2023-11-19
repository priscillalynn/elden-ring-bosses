import { useRoutes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/index.css";
import "./styles/App.css";

function App() {
  const element = useRoutes([
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
    <Header />

    <Main>{element}</Main>

    <Footer />
    </>
  )
}

export default App
