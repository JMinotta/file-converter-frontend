import { useState } from "react";
import Card from "./components/Card";

function ConvertirImagen() {
  const [formato, setFormato] = useState("jpg");
  const [archivo, setArchivo] = useState(null);

  const formatos = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "tiff",
    "tif",
    "gif",
    "bmp",
    "ico",
  ];

  const manejarCambioFormato = (event) => {
    setFormato(event.target.value);
  };

  const manejarArchivo = (event) => {
    setArchivo(event.target.files[0]);
  };

  const enviarConversion = async () => {
    if (!archivo) {
      alert("Selecciona un archivo primero");
      return;
    }
    if (!formatos.includes(archivo.name.split(".").pop().toLowerCase())) {
      return alert("Formato no permitido");
    }
    const formData = new FormData();
    formData.append("file", archivo);
    formData.append("format", formato);

    const respuesta = await fetch("http://localhost:8000/convert", {
      method: "POST",
      body: formData,
    });

    const blob = await respuesta.blob();
    console.log(respuesta);
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `convertido.${formato}`;

    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  };
  const elegir = (
    <select
      className="select select-primary"
      value={formato}
      onChange={manejarCambioFormato}
    >
      {formatos.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
  return (
    <>
      <Card
        accion={enviarConversion}
        titulo="Elige a qué formato convertir"
        texto={elegir}
        imagen={
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.webp,.tiff,.tif,.gif,.bmp,.ico"
            className="file-input"
            onChange={manejarArchivo}
          />
        }
      />
    </>
  );
}

export default ConvertirImagen;
