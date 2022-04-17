export class Curso{
    constructor(public nombre:string, public horas:number, public calificacion:number, public certificado: boolean, public anio:number)
    {

    }
    
    public esCertificado():string{
        if(this.certificado){
            return "Certificado";
        }
        return "No Certificado";
    }
}

