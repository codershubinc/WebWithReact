import React from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import { Client, Account } from "appwrite";
import { useState } from 'react'

export default function LoginPage() {
    const { register, handleSubmit } = useForm()

    async function demoLogin(data) {
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
            .setProject('662ab42b7d237361fa26');                 // Your project ID

        const account = new Account(client);
        console.log(data.email, data.password);

        try {
            await account.createEmailSession(data.email, data.password)
            console.log("logged in")

        } catch (error) {
            console.log("login error" + error);
        }
    }

    const login = async (data) => {
        setFormData(data)
    }
    return (
        <section className=' dark:bg-[#212627] text-black bg-[#c6c7d8]  dark:text-white w-full h-[100vh] flex justify-center items-center text-center -z-30 ' >
            <div className=' flex flex-col justify-center items-center w-[45vh]   h-[70vh] dark:bg-[#303637]  bg-slate-600 inherit  m-2   rounded-2xl bg-[url("https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png")] bg-contain bg-no-repeat '>
                <div className='bg-[#000000a8] w-full m-3 mx-3 rounded-tl-xl rounded-br-xl  '>
                    <p className='text-5xl text-center mb-6 ' >Login</p>
                </div>
                <form onSubmit={handleSubmit(demoLogin)}  >
                    <div className='   h-max   mx-auto bg-[#000000a8] bg-opacity-50 p-4 rounded-lg  w-full '>

                        <div>
                            <Input
                                label="E-Mail"
                                type="email"
                                placeholder="Enter Your E-mail"
                                value="two@two.com"
                                {...register("email", {
                                    required: true, validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Enter Your Password"
                                
                                value="12345678"
                                {...register("password", { required: true })}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className='w-full'
                    >
                        Login
                    </Button>
                </form>

            </div>
            <div>
                <p>
                <Button className='w-full' onClick={() => logout({ email: "two@two.com", password: "12345678" })}>
                        Login
                    </Button>
                </p>
            </div>
        </section>
    )
}
