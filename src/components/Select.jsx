import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options = [], label, className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {/* Label (if exists) */}
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1 block">
          {label}
        </label>
      )}

      {/* Select Dropdown */}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );
});

export default Select;
