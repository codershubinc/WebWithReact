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
                className={`bg-transparent text-lg text-gray-900 focus:outline-none underline border border-solid border-black text-center m-2 rounded-3xl z-10  top-[372px]   ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input