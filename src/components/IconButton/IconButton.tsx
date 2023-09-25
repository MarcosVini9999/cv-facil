// import xCircle from "@/assets/icons/xCircle.svg";

interface RoundButtonProps {
  className?: string;
  icon: string;
  description?: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export function IconButton({ className, icon, description, onClick }: RoundButtonProps) {
  return (
    <button
      className={`w-[3.4375rem] h-[3.4375rem] hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {/* <button className="hover:scale-105" onClick={onDelete}>
        <img src={xCircle} alt="delete" />
      </button> */}
      <img className="w-[3.4375rem] h-[3.4375rem]" src={icon} alt="icon" />
      <p>{description}</p>
    </button>
  );
}
