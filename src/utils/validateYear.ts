import { numeberOnly } from "@/config/masks/numberOnly";

export function handleYearValidation(
  value: string,
  setState: (value: string) => void,
) {
  if (value.length > 4) return;
  setState(numeberOnly(value));
}
