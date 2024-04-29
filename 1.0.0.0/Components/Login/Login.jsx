import React from 'react'

function Login() {
    return (
        <section className=' dark:bg-[#212627] text-black bg-[#c6c7d8]  dark:text-white w-full h-[100vh] flex justify-center items-center text-center -z-30 ' >
            <div className=' flex flex-col justify-center items-center w-[365px] h-[70vh] dark:bg-[#303637]  bg-slate-600 inherit  m-2  top-[90px] rounded-2xl  '>
                <div>
                <input  type="text" placeholder="UserName" className=" bg-transparent text-lg text-gray-900 focus:outline-none underline border border-solid border-black text-center m-2 rounded-3xl z-10 fixed top-[372px]  " />

                </div>
                <div>
                    <input type="text" name="" id="" placeholder='Password' className=" bg-transparent text-lg text-gray-900 focus:outline-none underline border border-solid border-black text-center m-2 rounded-3xl z-10 fixed" />
                </div>
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="" className=' fixed z-0 ' />
            </div>
        </section>
    )
}

export default Login
