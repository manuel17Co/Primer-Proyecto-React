import { useState } from "react"
import "./Piedra_papel_tijera.css"

const imagenes: Record<string, string> = {
  "Ganaste": "/assets/victoria.jpg", 
  "Perdiste": "/assets/derrota.jpg",
  "Empate": "/assets/empate.jpeg",
  "Elige para empezar!": "/assets/inicioPiedra.jpg",
  "Piedra": "/assets/piedra2.jpg",
  "Papel" : "/assets/papel.jpg",
  "Tijera" : "/assets/tijera.jpg"
};

export default function Piedra_papel_tijera(){
  const opciones = ["Piedra", "Papel", "Tijera"];

  const [eleccionJugador, setEleccionJugador] = useState("");
  const [eleccionPC, setEleccionPC] = useState("");
  const [resultado, setResultado] = useState("Elige para empezar!");
  const [victorias, setVictorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const jugar = (opcionJugador: string) => {
    const opcionPC = opciones[Math.floor(Math.random() * 3)];
    setEleccionJugador(opcionJugador);
    setEleccionPC(opcionPC);
    if (opcionJugador === opcionPC) {
      setResultado("Empate");
    } else if (
      (opcionJugador === "Piedra" && opcionPC === "Tijera") ||
      (opcionJugador === "Papel" && opcionPC === "Piedra") ||
      (opcionJugador === "Tijera" && opcionPC === "Papel")
    ) {
      setResultado("Ganaste");
      setVictorias(victorias + 1);
    } else {
      setResultado("Perdiste");
      setDerrotas(derrotas + 1);
    }
  }

  return(
    <div className="ppt-contenedor">
      <div className="opciones">
        {opciones.map((opcion) => (
          <div key={opcion} className="opcion-item" onClick={() => jugar(opcion)}>
            <img src={imagenes[opcion]} alt={opcion} className="new-img"/>
          </div>
        ))}
      </div>

      <div className="resultado-card">
        <div className="texto">
          <h2>{resultado}</h2>
          <h4>Tú: {eleccionJugador || "---"} | PC: {eleccionPC || "---"}</h4>
        </div>
        <div className="imagen-resultado-container">
          <img 
            src={imagenes[resultado]} 
            alt={resultado} 
            className="img-ppt"
          />
        </div>
      </div>

      <div className="contadores">
        <p>Victorias: {victorias}</p>
        <p>Derrotas: {derrotas}</p>
      </div>
    </div>
  )
}