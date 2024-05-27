import React from 'react';
import { useController } from 'react-hook-form';

const CustomInput = ({ name, control, ...rest }) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <div className="mb-4">
      <input
        {...field}
        {...rest}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
    </div>
  );
};

export default CustomInput;
