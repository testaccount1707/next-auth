import { CardWrapper } from '@/components/auth/card-wrapper'
import { LoginForm } from '@/components/auth/login-form'
import React from 'react'

function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

            <LoginForm />

        </div>
    )
}

export default LoginPage