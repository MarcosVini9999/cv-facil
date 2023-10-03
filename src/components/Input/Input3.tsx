import React, { useState } from "react";
import hidePassword from "@/assets/icons/hide.png"
import showPassword from "@/assets/icons/show.png"

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
  const[password,setPassword] = useState(type)

  const style =
    "font-normal rounded p-2.5 bg-slate-200 invalid:border valid:border";

  return (
    <label
      className={`${className} flex flex-col font-medium text-slate-900 text-base cursor-pointer capitalize`}
    >
      <span
        className={`${
          required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""
        }`}
      >
        {label}
      </span>
      {rows && rows > 1 ? (
        <textarea
          className={`${style} ${
            clicked
              ? "invalid:border-red-500 valid:border-green-500"
              : "focus:invalid:border-red-500 focus:valid:border-green-500"
          } w-full`}
          rows={rows}
          value={value}
          placeholder={placeholder}
          minLength={minlength}
          maxLength={maxlength}
          onChange={onChange}
          required={required}
          onClick={() => setClicked(true)}
          onFocus={() => setClicked(true)}
        ></textarea>
      ) : (<div className="relative">
          <input
            className={`${style} ${
              clicked
                ? "invalid:border-red-500 valid:border-green-500"
                : "focus:invalid:border-red-500 focus:valid:border-green-500"
            } h-10 w-full`}
            type={type ? password : "text"}
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
            onFocus={() => setClicked(true)}
          />
          <button onClick={e=>setPassword(password==="text"?"password":"text")} className={type==="password"?"block absolute right-[2%] mt-[-35px]":"hidden"} type="button">
            <img src={password==="password"?hidePassword:showPassword} alt="" className="w-[30px]"/>
          </button>
        </div>
      )}
    </label>
  );
}
