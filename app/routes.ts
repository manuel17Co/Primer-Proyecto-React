import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Inicio/Inicio.tsx"),
  route("inicio", "routes/Inicio/Inicio.tsx", {id: "inicio-manual"}),
  route("indice-masa-corporal", "routes/IMC/Indice-Masa-Corporal.tsx"),
  route("piedra-papel-tijera", "routes/PPT/Piedra-Papel-Tijera.tsx"),
] satisfies RouteConfig;
