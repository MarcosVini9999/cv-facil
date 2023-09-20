interface InputProps {
  className?: string;
  label: string;
  type?: string;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
}

export function Input({
  className,
  label,
  type,
  rows,
  value,
  onChange,
}: InputProps) {
  return (
    <label
      className={`${className} flex flex-col font-medium text-slate-900 text-base cursor-pointer capitalize`}
    >
      {label}
      {rows ? (
        <textarea
          className="w-full font-normal min-h-24 rounded p-2.5 bg-slate-200"
          rows={rows}
          value={value}
          onChange={e => onChange(e.target.value)}
          required
        ></textarea>
      ) : (
        <input
          className="w-full h-10 font-normal rounded px-2.5	bg-slate-200"
          type={type ? type : "text"}
          value={value}
          onChange={e => onChange(e.target.value)}
          required
        />
      )}
    </label>
  );
}
