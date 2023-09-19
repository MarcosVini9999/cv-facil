interface RoundButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function RoundButton({ className, children }: RoundButtonProps) {
  return (
    <button
      className={`min-w-24 px-2 h-8 rounded-full bg-rose-500 text-white text-xl transition-all duration-200 hover:shadow-md	${className}`}
    >
      {children}
    </button>
  );
}
