interface RoundButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

export function RoundButton({
  className,
  children,
  onClick,
}: RoundButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-24 h-8 rounded-full bg-rose-500 text-white text-xl transition-all duration-200 hover:shadow-md	${className}`}
    >
      {children}
    </button>
  );
}
