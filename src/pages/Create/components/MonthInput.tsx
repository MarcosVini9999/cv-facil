interface MonthProps {
  className?: string;
  label: string;
  value: any;
  onChange: (value: any) => void;
  required?: boolean;
}

const months = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export function MonthInput({
  className,
  label,
  value,
  onChange,
  required = false,
}: MonthProps) {
  return (
    <label
      className={`${className} flex flex-col font-medium text-slate-900 text-base cursor-pointer capitalize`}
    >
      {label}
      <select
        className="h-10 font-normal rounded p-2.5 bg-slate-200 capitalize"
        onChange={onChange}
        value={value}
        required={required}
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    </label>
  );
}
