import "./Preguntas.css"

export default function Preguntas({pregunta, respuesta}: {pregunta: string; respuesta: string}){
  return(
    <div className="pregunta-item">
      <h3>{pregunta}</h3>
      <p>{respuesta}</p>
    </div>
  )
}
