import Preguntas from "../../components/Preguntas/Preguntas"
import "./Inicio.css"

export default function Inicio(){
  let preguntas = [
    {pregunta: "¿Qué es react?", 
      descripcion: "Es una biblioteca de JavaScript de código abierto. Utilizada principalmente para construir interfaces de usuario modernas y dinámicas de forma eficiente, basándose en la creación de componentes reutilizables."},
    {pregunta: "¿Qué es la arquitectura de componentes?", 
      descripcion: "Es un patrón de diseño donde la interfaz se divide en piezas pequeñas, independientes y reutilizables llamadas componentes."},
    {pregunta: "¿Qué es el proceso de transpilación?", 
      descripcion: "Es el proceso de transformar código escrito en un lenguaje o versión específica a una versión de JavaScript que los navegadores puedan entender."},
    {pregunta: "¿Qué es JSX?", 
      descripcion: "JavaScript XML. Es una extensión de sintaxis que te permie escribir código con una estructura muy similar a HTML dentro de tus archivos JavaScript. Esto permite que el código sea más visual y fácil de entender."},
    {pregunta: "¿Qué son los hooks?", 
      descripcion: "Son funciones especiales que te permiten enganchar el estado y otras características de React en componentes funcionales."},
    {pregunta: "¿Qué es VITE?", 
      descripcion: "Es una herramienta de construcción moderna que sirve para condigurar proyectos de frontend de forma rápida y eficiente."},
    {pregunta: "¿Qué es state?", 
      descripcion: "Es un objeto que guarda la información dinámica de un componente. A diferencia de otras variables, cuando el state cambia, React lo detecta automáticamente y vuelve a renderizar el componente para mostrar los datos actualizados en la pantalla."},
    {pregunta: "¿Qué son los props?", 
      descripcion: "Son la forma en que pasamos información de un componente padre a un componente hijo. Son solo de lectura, lo que garantiza que el flujo de datos sea unidireccional y predecible."},
  ]

  return(
    <div className="izquierda">
      <h3 className="h3">Cargando preguntas y respuestas desde objetos reutilizando componentes</h3>
      <div className="preguntas">
        {preguntas.map((item, index) => (
          <Preguntas
            key={index}
            pregunta={item.pregunta}
            respuesta={item.descripcion}
          />
        ))}
      </div>
    </div>
  )
}
