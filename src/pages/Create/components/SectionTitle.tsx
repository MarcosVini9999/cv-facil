interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <p className={`${className} mb-3.5 text-xl font-bold text-slate-900`}>
      {children}
    </p>
  );
}
