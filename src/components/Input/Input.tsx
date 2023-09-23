interface InputProps {
  className?: string;
  label: string;
  type?: string;
  rows?: number;
  value: any;
  onChange: (value: any) => void;
  required?: boolean;
}

export function Input({
  className,
  label,
  type,
  rows,
  value,
  onChange,
  required = false,
}: InputProps) {
  const style = "font-normal rounded p-2.5 bg-slate-200";

  return (
    <label
      className={`${className} flex flex-col font-medium text-slate-900 text-base cursor-pointer capitalize`}
    >
      {label}
      {rows && rows > 1 ? (
        <textarea
          className={`${style} w-full`}
          rows={rows}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
        ></textarea>
      ) : (
        <input
          className={`${style} h-10 w-full`}
          type={type ? type : "text"}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
        />
      )}
    </label>
  );
}
