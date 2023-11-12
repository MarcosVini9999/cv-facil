import xCircle from "@/assets/icons/xCircle.svg";
import { on } from "events";

interface IconButtonProps {
  className?: string;
  icon: string;
  description?: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export function IconButton({ className, icon, description, onClick, onDelete }: IconButtonProps) {
  return (
    <div className="relative">
      <button className="w-7 h-7 absolute -top-3 -right-3 hover:scale-110" onClick={onDelete}>
        <img src={xCircle} alt="icon" />
      </button>
      <button
        className={`${className} relative w-[3.4375rem] h-[3.4375rem] hover:scale-105 cursor-pointer`}
        onClick={onClick}
      >
        <img className="w-[3.4375rem] h-[3.4375rem]" src={icon} alt="icon" />
        <p className="text-center">{description}</p>
      </button>
    </div>
  );
}
