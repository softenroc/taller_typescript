import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Practicas agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas Automatizadas", 25, 50, false, 2020),
    new Curso("Pruncipios de diseño y arquitectura", 30, 75, true, 2021)];
export var ap = new Aprendiz("Dario Fernando", "Rojas", "avatar.png", 37, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"/></td></tr>\n    <tr><td>Nombre:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>CursosCertitificados: </b></td><td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
