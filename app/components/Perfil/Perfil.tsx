import "./Perfil.css"
import { useState } from "react"

const datosPersonas = {
  persona1: {
    nombre: " Juan Pérez",
    git: " @juan_dev",
    telefono: "123456",
    correo: "juan@mail.com",
    descripcion: "Fan de React"
  },
  persona2: {
    nombre: "Maria Garcia",
    git: "@maria_code",
    telefono: "987654",
    correo: "maria@mail.com",
    descripcion: "Experta en CSS"
  }
};

export default function Perfil(){
  const [seleccionada, setSeleccionada] = useState<"persona1" | "persona2">("persona1");

  const datos = datosPersonas[seleccionada];

  return(
    <div className="perfil-sidebar">
      <div className="perfil-tabs">
        <button
          className={seleccionada === "persona1" ? "active" : ""}
          onClick={() => setSeleccionada("persona1")}
        >
          Persona 1
        </button>
        <button
          className={seleccionada === "persona2" ? "active" : ""}
          onClick={() => setSeleccionada("persona2")}
        >
          Persona 2
        </button>
      </div>
      <div className="foto-circulo"></div>
      <h2>{datos.nombre}</h2>
      <ul className="perfil-datos">
        <li><strong>Git: </strong>{datos.git}</li>
        <li><strong>Telefono: </strong>{datos.telefono}</li>
        <li><strong>Correo: </strong>{datos.correo}</li>
        <li><strong>Descripcion: </strong>{datos.descripcion}</li>
      </ul>
    </div>
  )
}
