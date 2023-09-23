interface RoundButtonProps {
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: (value?: any) => void;
  children: React.ReactNode;
}

export function RoundButton({
  className,
  children,
  onClick,
  type = "button",
}: RoundButtonProps) {
  return (
    <button
      className={`${className} min-w-24 px-2 h-8 rounded-full bg-rose-500 text-white text-xl transition-all duration-200 hover:shadow-md`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
