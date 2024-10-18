import { Tiempos } from "../models/ModelTiempos.js"

export function registrarTiempos() {
    let fecha = document.getElementById('fecha').value
    let tiempo = document.getElementById('tiempo').value
    let proyecto = document.getElementById('proyecto').value
    let newRegistro = {
        fecha: fecha,
        tiempo: tiempo,
        proyecto: proyecto
    }
    Tiempos.push(newRegistro)
    console.log(Tiempos)
    crearRegistroTiempo()
}

function crearRegistroTiempo() {
    let registro = document.createElement('tr')
    let fecha = document.createElement('td')
    let tiempo = document.createElement('td')
    let proyecto = document.createElement('td')
    let acciones = document.createElement('td')
    let editar = document.createElement('button')
    let eliminar = document.createElement('button')
    acciones.append(editar, eliminar)
    registro.append(fecha, tiempo, proyecto, acciones)
    console.log(registro)
}
