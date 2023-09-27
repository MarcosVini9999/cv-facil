import React from "react";

interface InputProps {
  className?: string;
  placeholder?: string;
  label: string;
  type?: string;
  rows?: number;
  value: any;
  onChange: (value: any) => void;
  required?: boolean;
  min?: number;
  max?: number;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
}

export function Input({
  className,
  label,
  placeholder,
  type,
  rows,
  value,
  onChange,
  required = false,
  min,
  max,
  minlength,
  maxlength,
  pattern,
}: InputProps) {
  const [clicked, setClicked] = React.useState(false);
  const style =
    "font-normal rounded p-2.5 bg-slate-200 invalid:border valid:border valid:border-green-500";

  return (
    <label
      className={`${className} flex flex-col font-medium text-slate-900 text-base cursor-pointer capitalize`}
    >
      {label}
      {rows && rows > 1 ? (
        <textarea
          className={`${style} ${
            clicked ? "invalid:border-red-500" : "focus:invalid:border-red-500"
          } w-full`}
          rows={rows}
          value={value}
          placeholder={placeholder}
          minLength={minlength}
          maxLength={maxlength}
          onChange={onChange}
          required={required}
          onClick={() => setClicked(true)}
        ></textarea>
      ) : (
        <input
          className={`${style} ${
            clicked ? "invalid:border-red-500" : "focus:invalid:border-red-500"
          } h-10 w-full`}
          type={type ? type : "text"}
          value={value}
          placeholder={placeholder}
          minLength={minlength}
          maxLength={maxlength}
          min={min}
          max={max}
          onChange={onChange}
          required={required}
          pattern={pattern}
          onClick={() => setClicked(true)}
        />
      )}
    </label>
  );
}
