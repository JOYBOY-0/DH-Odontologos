import { Dentist } from "./Dentist";
import { Patient } from "./Patient";

export type Appointment = {
    id: number;
    paciente: Patient;
    odontologo: Dentist;
    fecha: string;
}

export type AppointmentPost = {
    id?: number;
    paciente_id : number;
    odontologo_id : number;
    fecha: string;
}