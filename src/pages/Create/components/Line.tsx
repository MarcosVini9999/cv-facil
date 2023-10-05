interface LineProps {
  className?: string;
}

export function Line({ className }: LineProps) {
  return <hr className={`${className} mb-3.5 h-px bg-slate-800 my-1`} />;
}
