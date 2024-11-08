import { registrarTiempos } from "../controllers/ControllerTiempos.js";
import {
  listarProyectos,
  filtrarPorEmpresa,
  filtrarPorProyecto,
  filtrarPorTipoProyecto,
} from "../controllers/ControllerProyectos.js";

let btnRegistrar = document.getElementById("btnRegistrar");
if (btnRegistrar) {
  btnRegistrar.addEventListener("click", registrarTiempos);
}

document
  .getElementById("btnListarProyectos")
  .addEventListener("click", listarProyectos);
