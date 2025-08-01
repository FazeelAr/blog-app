import React from "react";


function Button({
    children,
    type='button',
    bgColour = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}){
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColour} ${textColor} ${className}`} 
            {...props}
            type={type}
        >
            {children}
        </button>
    )
}


export default Button;