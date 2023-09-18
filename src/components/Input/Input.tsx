import "./styles.module.scss";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ label, type, value, onChange }: InputProps) {
  return (
    <div class-name="input">
      <label>
        {label}
        <input
          type={type ? type : "text"}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
