import "./styles.module.scss";

interface RoundButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function RoundButton({ className, children }: RoundButtonProps) {
  return (
    <button class-name={`${className}`}>
      {children}
    </button>
  );
}
