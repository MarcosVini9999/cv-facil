interface RoundButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function RoundButton({ className, children }: RoundButtonProps) {

  return (
    <button type="submit"
      className={`w-24 h-8 rounded-full bg-rose-500 text-white text-xl transition-all duration-200 hover:shadow-md	${className}`}
    >
      {children}
    </button>
  );
}
