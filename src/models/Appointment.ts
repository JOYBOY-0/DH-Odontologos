import { Dentist } from "./Dentist";
import { Patient } from "./Patient";

export type Appointment = {
    id: number;
    paciente: Patient;
    odontologo: Dentist;
    fecha: String;
}