export class Departamento {

    constructor(public idDepartmento: number,
                public nombre: string,
                public direccion: string,
                public region: string,
                public ciudad: string,
                public precio: number,
                public disponibilidad: boolean) { }
                
}