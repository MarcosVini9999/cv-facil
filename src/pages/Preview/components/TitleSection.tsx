interface props {
  children: React.ReactNode;
}

export function TitleSection({ children }: props) {
  return (
    <span className="text-[20px] font-medium mt-[16px] mb-[12px]">
      {children}
    </span>
  );
}
