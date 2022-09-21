import axios from "axios";
import { useState } from "react";

export const useFetchData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async (url: string) => {
        setLoading(true);
        try {
            const { data } = await axios.get(url);
            setData(data);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    return {
        loading,
        error,
        data,
        fetchData
    }
}