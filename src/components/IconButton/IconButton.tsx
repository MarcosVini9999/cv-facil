import xCircle from "@/assets/icons/xCircle.svg";

interface RoundButtonProps {
  className?: string;
  icon: string;
  description?: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export function IconButton({ className, icon, description, onClick, onDelete }: RoundButtonProps) {
  return (
    <button
      className={`w-[3.4375rem] h-[3.4375rem] hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <button className="w-7 h-7 absolute -top-3 -right-3 hover:scale-105" onClick={onDelete}>
          <img src={xCircle} alt="icon" />
        </button>
        <img className="w-[3.4375rem] h-[3.4375rem]" src={icon} alt="icon" />
      </div>
      <p>{description}</p>
    </button>
  );
}
