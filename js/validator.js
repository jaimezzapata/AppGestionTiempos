import { registrarTiempos } from "../controllers/ControllerTiempos.js";
import {
  listarProyectos,
  filtrarPorEmpresa,
  filtrarPorProyecto,
  filtrarPorTipoProyecto,
} from "../controllers/ControllerProyectos.js";

document
  .getElementById("btnRegistrar")
  .addEventListener("click", registrarTiempos);
