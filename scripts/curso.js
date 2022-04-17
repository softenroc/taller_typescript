var Curso = /** @class */ (function () {
    function Curso(nombre, horas, calificacion, certificado, anio) {
        this.nombre = nombre;
        this.horas = horas;
        this.calificacion = calificacion;
        this.certificado = certificado;
        this.anio = anio;
    }
    Curso.prototype.esCertificado = function () {
        if (this.certificado) {
            return "Certificado";
        }
        return "No Certificado";
    };
    return Curso;
}());
export { Curso };
