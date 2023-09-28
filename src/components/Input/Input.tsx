import { useState } from "react";
import hidePassword from "@/assets/icons/hide.png"
import showPassword from "@/assets/icons/show.png"

interface InputProps {
  className?: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ className, label, type, value, onChange }: InputProps) {
  const[password,setPassword] = useState(type)
  
  return (
    <label
      className={`${className} flex flex-col text-slate-900 text-xl cursor-pointer capitalize`}
    >
      {label}
      <div className="flex relative">
        <input
          className="w-full h-10 rounded px-2.5	bg-slate-200"
          type={type ? password : "text"}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button onClick={e=>setPassword(password==="text"?"password":"text")} className={type==="password"?"block absolute right-[2%] mt-[5px]":"hidden"}>
          <img src={password==="password"?hidePassword:showPassword} alt="" className="w-[30px]"/>
        </button>
      </div>
      
    </label>
  );
}
