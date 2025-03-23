import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { label, type = "text", className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-1 pl-1 text-gray-700 font-medium"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-400 border border-gray-300 w-full transition-all duration-200 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;
