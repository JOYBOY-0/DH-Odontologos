import { Patient } from "../Patient";
import { EmptyAdress } from "./EmptyAdress";

export const EmptyPatient : Patient = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    dni: 0,
    domicilio: EmptyAdress,
    registerDate: ''
}