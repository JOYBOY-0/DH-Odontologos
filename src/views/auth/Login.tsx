import { Button } from '@/common/button/Button'
import { Input } from '@/common/input/Input'
import React, { FC } from 'react'

type Props = {
    handleLogin: (email: string, password: string) => void,
    password: string,
    email: string,
    setPassword: (password: string) => void,
    setEmail: (email: string) => void,
    loading: boolean
}

export const Login : FC<Props> =({
    password, setPassword, email, setEmail, handleLogin, loading
}) => {

const handleSubmit = () => {
    if (!loading) handleLogin(email, password)
}
  return (
    <div
        className="auth_form_content"
    >
        <h1 className="auth_title">
            Bienvenido
        </h1>
        <p className="auth_subtitle">Por favor, ingrese sus datos</p>

        <Input
        label="Email"
        id="login_email_field"
        type="text"
        placeholder="awesomeuser@email.com"
        value={email}
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-5"
        />

        <Input
        label="Password"
        id="login_password_field"
        type="password"
        placeholder="awesomeuser@email.com"
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
        />

 
        <Button
            onClick={handleSubmit}
            paddding="py-3 px-6"
            className={`text-lg mt-4`}
            aria-live="polite"
        >
            Ingresar
        </Button>
    </div>
    )
}


