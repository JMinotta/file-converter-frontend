import { Routes, Route } from "react-router";
import ConvertirImagen from "./convertir";
import App from "./App";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/convertir" element={<ConvertirImagen />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default AppRoutes;
