import { Appointment } from "../Appointment";
import { EmptyDentist } from "./EmptyDentist";
import { EmptyPatient } from "./EmptyPatient";

export const EmptyAppointment : Appointment = {
    id: 0,
    fecha: '',
    paciente: EmptyPatient,
    odontologo: EmptyDentist
}
