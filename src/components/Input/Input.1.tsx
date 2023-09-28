import { useState } from "react";
import hidePassword from "@/assets/icons/hide.png";
import showPassword from "@/assets/icons/show.png";
import { InputProps } from "./Input";


export function Input({ className, label, type, value, onChange }: InputProps) {
  const [typeText, setTypeText] = useState(false);

  return (
    <label
      className={`${className} flex flex-col text-slate-900 text-xl cursor-pointer capitalize`}
    >
      {label}
      <input
        className="w-full h-10 rounded px-2.5	bg-slate-200"
        type={type ? type : "text"}
        value={value}
        onChange={e => onChange(e.target.value)} />
      <button onClick={setTypeText(typeText === true ? false : true)}><img src={typeText === false ? hidePassword : showPassword} alt="" /></button>
    </label>
  );
}
