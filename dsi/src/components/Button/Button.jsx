import React from 'react'

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button type={type} className={`${bgColor} ${textColor} ${className} rounded-full my-3 h-10 `} {...props}>
            {children}
        </button>
    )
}


