import { IconButton } from "..";
import trash from "@/assets/icons/trash.svg";
import edit from "@/assets/icons/edit.svg";

interface ProfExpViewProps {
  id: string;
  title: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  description: string;
  city: string;
  state: string;
}

export function ProfExpView({
  title,
  startMonth,
  startYear,
  endMonth,
  endYear,
  description,
  city,
  state,
}: ProfExpViewProps) {
  return (
    <div className="border-2 p-1 mb-3.5 rounded relative">
      <div className="flex flex-col gap-2 mb-1 absolute top-0 -right-10">
        <IconButton className="bg-green-500" icon={edit} alt="Edit icon" />
        <IconButton className="bg-red-500" icon={trash} alt="Delete icon" />
      </div>
      <p className="text-slate-800 text-xl">
        {startMonth} {startYear} - {endMonth} {endYear}{" "}
        <span className="font-bold">{title}</span>, {city}, {state}.
      </p>
      <p className="text-slate-800 text-lg mt-2 mb-2.5">{description}</p>
    </div>
  );
}
