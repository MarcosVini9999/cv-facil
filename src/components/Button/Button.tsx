interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  icon?: string;
}

export function Button({ className, children, icon }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center rounded-[0.3125rem] bg-[#FB4E4E] text-white text-xl transition-all duration-200 hover:shadow-md hover:scale-105 px-[0.31rem]	${className}`}
    >
      <div className="flex flex-row gap-[0.44rem]">
        {icon ? <img src={icon} alt="" /> : null}
        <p className="text-white text-[1rem] font-[400]">{children}</p>
      </div>
    </button>
  );
}
