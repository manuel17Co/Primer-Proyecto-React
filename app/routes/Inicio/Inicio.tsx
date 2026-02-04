import Preguntas from "../../components/Preguntas/Preguntas"
import "./Inicio.css"

export default function Inicio(){
  let preguntas = [
    {pregunta: "¿Qué es react?", descripcion: "react"},
    {pregunta: "¿Qué es la arquitectura de componentes?", descripcion: "arquitectura"},
    {pregunta: "¿Qué es el proceso de transpilación?", descripcion: "transpilación"},
    {pregunta: "¿Qué es JSX?", descripcion: "jsx"},
    {pregunta: "¿Qué son los hooks?", descripcion: "hooks"},
    {pregunta: "¿Qué es VITE?", descripcion: "vite"},
    {pregunta: "¿Qué es state?", descripcion: "state"},
    {pregunta: "¿Qué son los props?", descripcion: "props"},
  ]

  return(
    <div className="izquierda">
      <h3>Cargando preguntas y respuestas desde objetos reutilizando componentes</h3>
      <div className="preguntas">
        {preguntas.map((item, index) => (
          <Preguntas
            pregunta={item.pregunta}
            respuesta={item.descripcion}
          />
        ))}
      </div>
    </div>
  )
}
