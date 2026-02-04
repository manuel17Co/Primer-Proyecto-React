import "./Perfil.css"
import { useState } from "react"

const datosPersonas = {
  persona1: {
    nombre: " Juan P Triana",
    git: "Juantriana25",
    telefono: "123456",
    correo: "juanp.trianab@autonoma.edu.co",
    descripcion: "Adicto al codigo y la velocidad"
  },
  persona2: {
    nombre: "Manuel M Rubio",
    git: "Manuel17Co",
    telefono: "987654",
    correo: "manuel.munozr@autonoma.edu.co",
    descripcion: "NKD 1300 GS"
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
      <img className="foto-circulo" src="../assets/LeBron-James.jpg"/>
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
