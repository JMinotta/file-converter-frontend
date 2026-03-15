import "./App.css";
import Card from "./components/Card";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const handleConvertir = () => {
    navigate("/convertir");
  };
  return (
    <>
      <Card
        accion={handleConvertir}
        titulo="Convertir Imagen"
        texto="Convertir imagen a formato jpg, jpeg, png, webp, tiff, tif, gif, bmp, ico"
      />
    </>
  );
}

export default App;
