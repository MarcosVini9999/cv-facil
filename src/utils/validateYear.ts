import { numeberOnly } from "@/config/masks/numberOnly";

export function handleYearValidation(
  event: React.ChangeEvent<HTMLInputElement>,
  setState: (value: string) => void,
) {
  const value = event.target.value;
  if (value.length > 4) return;
  setState(numeberOnly(value));
}