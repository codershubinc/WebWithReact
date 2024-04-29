import React from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'

function Login() {
    const { register } = useForm()
    return (
        <section className=' dark:bg-[#212627] text-black bg-[#c6c7d8]  dark:text-white w-full h-[100vh] flex justify-center items-center text-center -z-30 ' >
            <div className=' flex flex-col justify-center items-center w-[45vh] h-[70vh] dark:bg-[#303637]  bg-slate-600 inherit  m-2  top-[90px] rounded-2xl bg-[url("https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png")] bg-contain bg-no-repeat '>
                <div className=' w-max h-max   mx-auto bg-[#000000a8] bg-opacity-50 p-4 rounded-lg '>

                    <div>
                        <Input
                            label="E-Mail"
                            type="email"
                            placeholder="Enter Your E-mail"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div>
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter Your Password"
                            {...register("password", { required: true })}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login
