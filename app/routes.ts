import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Inicio/Inicio.tsx"),
  route("inicio", "routes/Inicio/Inicio.tsx", {id: "inicio-manual"}),
] satisfies RouteConfig;
