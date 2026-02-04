import { NavLink } from "react-router";
import "./Header.css"

export default function Header(){
  let menu = [
    {nombre: "Inicio", enlace: "."},
    {nombre: "IMC", enlace: "indice-masa-corporal"},
    {nombre: "PPT", enlace: "piedra-papel-tijera"}
  ]

  return(
    <header>
      <nav>
        <ul>
          {
            menu.map((item, index) => (
              <li key={index}>
                <NavLink to={item.enlace}>
                  {item.nombre}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}