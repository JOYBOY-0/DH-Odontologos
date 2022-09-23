export type Patient = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    dni: number;
    domicilio: Adress;
    registerDate: string;
}

export type Adress = {
    id: number;
    calle: string;
    numero: number;
    localidad: string;
    provincia: string
}
    