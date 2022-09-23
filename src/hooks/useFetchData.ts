import axios from "axios";
import { useState } from "react";

export enum FetchStatus {
    IDLE = "idle",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}

export const useFetchData = (baseUrl: string) => {

    const [status, setStatus] = useState(FetchStatus.IDLE);
    const [data, setData] = useState([]);

    const getData = async () => {
        setStatus(FetchStatus.LOADING);
        try {
            const { data } = await axios.get(baseUrl);
            setData(data);
            setStatus(FetchStatus.SUCCESS);
        } catch (error) {
            setStatus(FetchStatus.ERROR);
        }
    }

    const postData = async (url: string, body : {} = {}) => {
        setStatus(FetchStatus.LOADING);
        try {
            await axios.post(url, body).then(() => {
                setStatus(FetchStatus.SUCCESS)
                getData();
            })
        } catch (error) {
            setStatus(FetchStatus.ERROR);
        }
    }

    const deleteData = async (url: string) => {
        setStatus(FetchStatus.LOADING);
        try {
            await axios.delete(url).then(() => {
                setStatus(FetchStatus.SUCCESS)
                getData();
            })
        } catch (error) {
            setStatus(FetchStatus.ERROR);
        }
    }

    //////// use swal reminder

    const putData = async (url: string, body : {} = {}) => {
        setStatus(FetchStatus.LOADING);
        try {
            await axios.put(url, body).then(() => {
                setStatus(FetchStatus.SUCCESS)
                getData();
            })
            
        } catch (error) {
            setStatus(FetchStatus.ERROR);
        }
    }

    return {
        status,
        data,
        getData,
        postData,
        deleteData,
        putData
    }
}