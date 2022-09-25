import { FetchStatus, useFetchData } from "@/hooks/useFetchData";
import { Appointment, AppointmentPost, Dentist, Patient } from "@/models";
import React, { createContext, useContext, useState, useEffect } from "react";

export type dataContext = {
    patients : Patient[],
    dentists : Dentist[],
    appointments : Appointment[],
    patientStatus : FetchStatus,
    dentistStatus : FetchStatus,
    appointmentStatus : FetchStatus,
    getPatients : (url : string) => void,
    getDentists : (url : string) => void,
    getAppointments : (url : string) => void,
    addPatient : (url : string, body: Patient) => void,
    addDentist : (url : string, body: Dentist) => void,
    addAppointment : (url : string, body: AppointmentPost) => void,
    updatePatient : (url : string, body: Patient) => void,
    updateDentist : (url : string, body: Dentist) => void,
    updateAppointment : (url : string, body: Appointment) => void,
    deletePatient : (url : string) => void,
    deleteDentist : (url : string) => void,
    deleteAppointment : (url : string) => void,
}

const dataContext = createContext<dataContext>({
    patients : [],
    dentists : [],
    appointments : [],
    patientStatus : FetchStatus.IDLE,
    dentistStatus : FetchStatus.IDLE,
    appointmentStatus : FetchStatus.IDLE,
    getPatients : () => {},
    getDentists : () => {},
    getAppointments : () => {},
    addPatient : () => {},
    addDentist : () => {},
    addAppointment : () => {},
    updatePatient : () => {},
    updateDentist : () => {},
    updateAppointment : () => {},
    deletePatient : () => {},
    deleteDentist : () => {},
    deleteAppointment : () => {}

});

export const useDataContext = () => useContext(dataContext) as dataContext;

export const DataProvider = ({ children } : {children : React.ReactNode } ) => {

    const {
        status : patientStatus,
        
        data : patients,
        getData : getPatients,
        postData : addPatient,
        putData : updatePatient,
        deleteData : deletePatient
      } = useFetchData('http://localhost:8080/pacientes')

    const {
        status : dentistStatus,
        data : dentists,
        getData : getDentists,
        postData : addDentist,
        putData : updateDentist,
        deleteData : deleteDentist
    } = useFetchData('http://localhost:8080/odontologos')

    const {
        status : appointmentStatus,
        data : appointments,
        getData : getAppointments,
        postData : addAppointment,
        putData : updateAppointment,
        deleteData : deleteAppointment
    } = useFetchData('http://localhost:8080/turnos')

    useEffect(() => {
        getPatients(),
        getDentists(),
        getAppointments()
    
    }, [])
    
    
    return (
        <dataContext.Provider 
            value={{ 
                patients, 
                dentists, 
                appointments,
                dentistStatus,
                patientStatus,
                appointmentStatus,
                getPatients,
                getDentists,
                getAppointments,
                addPatient,
                addDentist,
                addAppointment,
                updatePatient,
                updateDentist,
                updateAppointment,
                deletePatient,
                deleteDentist,
                deleteAppointment

            }} 
        >
            {children}
        </dataContext.Provider>
    )   
}