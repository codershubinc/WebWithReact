import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full flex flex-col '>
            {label && <label
                className=' mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`bg-black text-lg text-white focus:outline-none underline border border-solid border-aliceblue text-center m-2 rounded-3xl  h-[43px] w-full  ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input