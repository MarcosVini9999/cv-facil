interface InputProps {
  className?: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ className, label, type, value, onChange }: InputProps) {
  return (
    <label
      className={`${className} flex flex-col text-slate-900 text-base cursor-pointer capitalize`}
    >
      {label}
      <input
        className="w-full h-10 rounded px-2.5	bg-slate-200"
        type={type ? type : "text"}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}
