import axios from "axios";
import { useState } from "react";

// async petition hook to request user login
export const useAuth = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLogin = async (email: string, password: string) => {
        const { data } = await axios.post('http://localhost:3000/api/login', {
            email,
            password
        });
    }

    const handleSignUp = async (email: string, password: string) => {
        const { data } = await axios.post('http://localhost:3000/api/signup', {
            email,
            password
        });
    }
    

    return {
        loading,
        error,
        handleLogin,
        handleSignUp
    }
}